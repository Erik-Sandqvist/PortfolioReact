import { useEffect, useState } from "react";
import { sceneReady } from "../../utils/appReady";

const FULL_TEXT = "Erik Sandqvist";

const TYPE_MS = 40; // ~0.6s to type the name
const MIN_MS = 700; // don't flash past the name on a fast load
const MAX_MS = 2500; // never trap a visitor on a slow one
const FADE_MS = 450;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Two frames: one to commit the mount, one to be reasonably sure it painted.
const painted = () =>
  new Promise((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(resolve))
  );

export const LoadingScreen = ({ onComplete, waitForScene = false }) => {
  const [text, setText] = useState("");
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(FULL_TEXT.substring(0, index));
      index++;
      if (index > FULL_TEXT.length) clearInterval(interval);
    }, TYPE_MS);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const ready = [
      document.fonts ? document.fonts.ready : Promise.resolve(),
      painted(),
      wait(MIN_MS),
    ];

    // On Home, hold until the 3D canvas has drawn its first frame — that mount
    // is the jank this screen exists to cover. Other routes have no canvas, so
    // the cap below is what ends the wait if something stalls.
    if (waitForScene) ready.push(sceneReady);

    Promise.race([Promise.all(ready), wait(MAX_MS)]).then(() => {
      if (!cancelled) setLeaving(true);
    });

    return () => {
      cancelled = true;
    };
  }, [waitForScene]);

  // Unmount only once the fade has finished, so the app isn't revealed abruptly.
  useEffect(() => {
    if (!leaving) return;
    const timeout = setTimeout(onComplete, FADE_MS);
    return () => clearTimeout(timeout);
  }, [leaving, onComplete]);

  return (
    <div
      aria-hidden={leaving}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-base-100 text-secondary transition-opacity duration-[450ms] ease-out ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-[200px] h-[2px] bg-secondary/15 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-primary animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
