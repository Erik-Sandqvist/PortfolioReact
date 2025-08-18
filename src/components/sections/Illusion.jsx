// jsx
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const Illusion = () => {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x000000, 30, 150)

    const camera = new THREE.PerspectiveCamera(45, 2, 0.1, 150)
    camera.position.set(0, 400, 400)

    // Original points (x,z) with randomized y
    const base = [
      [68.5, 185.5],
      [1, 262.5],
      [270.9, 281.9],
      [345.5, 212.8],
      [178, 155.7],
      [240.3, 72.3],
      [153.4, 0.6],
      [52.6, 53.3],
      [68.5, 185.5],
    ]
    const points = base.map(([x, z]) => new THREE.Vector3(x, Math.random() * 100, z))
    const path = new THREE.CatmullRomCurve3(points)
    path.closed = true

    const tubeDetail = 1600
    const circlesDetail = 40
    const radius = 4

    const frames = path.computeFrenetFrames(tubeDetail, true)

    const positions = new Float32Array(tubeDetail * circlesDetail * 3)
    const colors = new Float32Array(tubeDetail * circlesDetail * 3)

    let pPtr = 0
    let cPtr = 0
    for (let i = 0; i < tubeDetail; i++) {
      const normal = frames.normals[i]
      const binormal = frames.binormals[i]
      const t = i / tubeDetail
      const center = path.getPointAt(t)

      for (let j = 0; j < circlesDetail; j++) {
        const angle = (j / circlesDetail) * Math.PI * 2 + t * Math.PI * 5
        const sin = Math.sin(angle)
        const cos = -Math.cos(angle)

        const nx = cos * normal.x + sin * binormal.x
        const ny = cos * normal.y + sin * binormal.y
        const nz = cos * normal.z + sin * binormal.z

        const x = center.x + nx * radius
        const y = center.y + ny * radius
        const z = center.z + nz * radius

        positions[pPtr++] = x
        positions[pPtr++] = y
        positions[pPtr++] = z

        const col = new THREE.Color(`hsl(${t * 360 * 4}, 100%, 50%)`)
        colors[cPtr++] = col.r
        colors[cPtr++] = col.g
        colors[cPtr++] = col.b
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({ size: 0.2, vertexColors: true })
    const tube = new THREE.Points(geometry, material)
    scene.add(tube)

    const resize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    let percentage = 0
    const tick = () => {
      percentage += 0.0005
      const p1 = path.getPointAt(percentage % 1)
      const p2 = path.getPointAt((percentage + 0.01) % 1)
      camera.position.set(p1.x, p1.y, p1.z)
      camera.lookAt(p2)
      renderer.render(scene, camera)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', margin: 0 }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
    </div>
  )
}