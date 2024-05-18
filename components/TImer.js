import { useState, useEffect } from 'react';

const Timer = ({ start }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    if (!start) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      setTimeElapsed(Date.now() - startTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [start]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-mono">
      <span>{formatTime(timeElapsed)}</span>
    </div>
  );
};

export default Timer;