let splineScriptLoaded = false;
let splineScriptLoading = false;
let splineLoadPromise: Promise<void> | null = null;

export const loadSplineScript = (): Promise<void> => {
  if (splineScriptLoaded) {
    return Promise.resolve();
  }

  if (splineScriptLoading && splineLoadPromise) {
    return splineLoadPromise;
  }

  splineScriptLoading = true;
  splineLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.37/build/spline-viewer.js';
    script.async = true;

    script.onload = () => {
      splineScriptLoaded = true;
      splineScriptLoading = false;
      resolve();
    };

    script.onerror = () => {
      splineScriptLoading = false;
      reject(new Error('Failed to load Spline viewer script'));
    };

    document.head.appendChild(script);
  });

  return splineLoadPromise;
};
