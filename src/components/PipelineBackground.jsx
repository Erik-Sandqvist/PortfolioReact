import { useEffect, useRef } from "react"

export const PipelineBackground = ({ className = "w-full h-40" }) => {
  const frontRef = useRef(null) // synlig canvas
  const backRef = useRef(null)  // rit-buffer
  const rafRef = useRef(0)
  const pipesRef = useRef(null)
  const tickRef = useRef(0)
  const centerRef = useRef([0, 0])

  useEffect(() => {
    const pipeCount = 30
    const pipePropCount = 8
    const turnCount = 8
    const turnAmount = (360 / turnCount) * (Math.PI / 180)
    const turnChanceRange = 58
    const baseSpeed = 0.5
    const rangeSpeed = 1
    const baseTTL = 100
    const rangeTTL = 300
    const baseWidth = 2
    const rangeWidth = 4
    const baseHue = 180
    const rangeHue = 60

    const rand = n => Math.random() * n
    const round = Math.round
    const TAU = Math.PI * 2
    const HALF_PI = Math.PI / 2
    const fadeInOut = (t, m) => {
      const hm = m * 0.5
      return Math.abs((t + hm) % m - hm) / hm
    }

    const front = frontRef.current
    const back = backRef.current
    const ctxA = back.getContext("2d")
    const ctxB = front.getContext("2d")

    const resize = () => {
      // Kolla wrapper-diven för storlek
      const rect = front.parentElement.getBoundingClientRect()
      const w = rect.width || window.innerWidth
      const h = rect.height || 200 // fallback ifall höjd blir 0
      back.width = front.width = w
      back.height = front.height = h
      centerRef.current[0] = w * 0.5
      centerRef.current[1] = h * 0.5
    }

    resize() // kör direkt vid mount

    const pipePropsLength = pipeCount * pipePropCount
    pipesRef.current = new Float32Array(pipePropsLength)

    const initPipe = i => {
      const arr = pipesRef.current
      let x = rand(front.width)
      let y = centerRef.current[1]
      let direction = round(rand(1)) ? HALF_PI : TAU - HALF_PI
      let speed = baseSpeed + rand(rangeSpeed)
      let life = 0
      let ttl = baseTTL + rand(rangeTTL)
      let width = baseWidth + rand(rangeWidth)
      let hue = baseHue + rand(rangeHue)
      arr.set([x, y, direction, speed, life, ttl, width, hue], i)
    }

    for (let i = 0; i < pipePropsLength; i += pipePropCount) initPipe(i)

    const drawPipe = (x, y, life, ttl, width, hue) => {
      ctxA.save()
      ctxA.strokeStyle = `hsla(${hue},75%,50%,${fadeInOut(life, ttl) * 0.125})`
      ctxA.beginPath()
      ctxA.arc(x, y, width, 0, TAU)
      ctxA.stroke()
      ctxA.closePath()
      ctxA.restore()
    }

    const updatePipe = i => {
      const arr = pipesRef.current
      let x = arr[i]
      let y = arr[i + 1]
      let direction = arr[i + 2]
      const speed = arr[i + 3]
      let life = arr[i + 4]
      const ttl = arr[i + 5]
      const width = arr[i + 6]
      const hue = arr[i + 7]

      drawPipe(x, y, life, ttl, width, hue)

      life++
      x += Math.cos(direction) * speed
      y += Math.sin(direction) * speed

      const turnChance =
        !(tickRef.current % round(rand(turnChanceRange))) &&
        (!(round(x) % 6) || !(round(y) % 6))
      const turnBias = round(rand(1)) ? -1 : 1
      direction += turnChance ? turnAmount * turnBias : 0

      if (x > front.width) x = 0
      if (x < 0) x = front.width
      if (y > front.height) y = 0
      if (y < 0) y = front.height

      arr[i] = x
      arr[i + 1] = y
      arr[i + 2] = direction
      arr[i + 4] = life

      if (life > ttl) initPipe(i)
    }

    const getBaseColor = () => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue("--b1")
        .trim()
      return raw.includes("%") ? `hsl(${raw})` : raw || "#000"
    }

    const render = () => {
      if (front.width === 0 || front.height === 0) return
      if (back.width === 0 || back.height === 0) return

      const base = getBaseColor()
      ctxB.fillStyle = base
      ctxB.fillRect(0, 0, front.width, front.height)

      ctxB.save()
      ctxB.filter = "blur(12px)"
      ctxB.drawImage(back, 0, 0)
      ctxB.restore()

      ctxB.drawImage(back, 0, 0)
    }

    const loop = () => {
      tickRef.current++
      for (let i = 0; i < pipePropsLength; i += pipePropCount) updatePipe(i)
      render()
      rafRef.current = requestAnimationFrame(loop)
    }

    window.addEventListener("resize", resize)
    loop()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={frontRef}
        className="absolute inset-0 -z-1 w-full h-full pointer-events-none"
      />
      <canvas ref={backRef} style={{ display: "none" }} />
    </div>
  )
}
