import * as React from 'react';
import styles from './index.scss';

export function App(): JSX.Element {
  const cRef = React.useRef<HTMLCanvasElement>();
  React.useEffect(() => {
    const ctx = cRef.current.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }, []);

  return (
    <div>
      <canvas width={800} height={800} ref={cRef} className={styles.myCanvas}>
        请使用最新的浏览器
      </canvas>
    </div>
  );
}
