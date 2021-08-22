import * as React from 'react';
import styles from './index.scss';

export function App(): JSX.Element {
  const cRef = React.useRef<HTMLCanvasElement>();
  React.useEffect(() => {
    const ctx = cRef.current.getContext('2d');

    const g1 = ctx.createLinearGradient(0, 0, 0, 150);
    g1.addColorStop(0, '#00ABEB');
    g1.addColorStop(0.5, '#fff');
    g1.addColorStop(0.5, '#26C000');
    g1.addColorStop(1, '#fff');
    ctx.fillStyle = g1;
    ctx.fillRect(10, 10, 130, 130);

    const g2 = ctx.createLinearGradient(0, 50, 0, 95);
    g2.addColorStop(0.5, '#000');
    g2.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.strokeStyle = g2;
    ctx.strokeRect(150, 50, 50, 50);
  }, []);

  return (
    <div>
      <canvas width={800} height={800} ref={cRef} className={styles.myCanvas}>
        请使用最新的浏览器
      </canvas>
    </div>
  );
}
