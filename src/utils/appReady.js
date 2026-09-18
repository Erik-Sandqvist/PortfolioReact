// Lets Home's 3D canvas tell the intro overlay that it has actually drawn a
// frame, so the overlay covers that mount instead of handing over just before
// it starts.
//
// Routes without a canvas never resolve this, so anything awaiting it must cap
// its own wait.

let resolveScene;

export const sceneReady = new Promise((resolve) => {
  resolveScene = resolve;
});

export const markSceneReady = () => {
  if (resolveScene) resolveScene();
};
