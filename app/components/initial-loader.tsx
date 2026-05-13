'use client';

import { useEffect, useState } from 'react';

const LOADER_DURATION_MS = 2200;

export function InitialLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, LOADER_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="initial-loader" role="status" aria-live="polite" aria-label="Loading portfolio">
      <div className="loader-mark" aria-hidden="true">
        <svg className="loader-hexagon" viewBox="0 0 120 120" focusable="false">
          <polygon points="60 7 106 33.5 106 86.5 60 113 14 86.5 14 33.5" />
        </svg>
        <span className="loader-letter">P</span>
      </div>
    </div>
  );
}
