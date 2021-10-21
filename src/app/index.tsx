import * as React from 'react';
import styles from './index.scss';

export function App(): JSX.Element {
  const cRef = React.useRef<HTMLCanvasElement>();
  React.useEffect(() => {
    const ctx = cRef.current.getContext('2d');

    ctx.fillStyle = 'red';
    ctx.save();
    for (let i = 0; i < 3; i++) {
      ctx.translate(0, 50); // 坐标系相对向下移动50
      ctx.save();
      for (let j = 0; j < 3; j++) {
        ctx.translate(50, 0); // 坐标系相对向右移动50
        ctx.fillRect(0, 0, 25, 25);
      }
      ctx.restore();
    }
    ctx.restore();
  }, []);

  return (
    <div>
      <canvas width={800} height={800} ref={cRef} className={styles.myCanvas}>
        请使用最新的浏览器
      </canvas>
    </div>
  );
}
