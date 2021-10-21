import * as React from 'react';
import styles from './index.scss';

export function App(): JSX.Element {
  const cRef = React.useRef<HTMLCanvasElement>();
  React.useEffect(() => {
    const ctx = cRef.current.getContext('2d');

    ctx.fillStyle = 'red';
    ctx.save();
    ctx.translate(200, 200);
    for (let i = 0; i < 8; i++) {
      ctx.fillRect(50, 0, 25, 25);
      ctx.rotate((Math.PI / 180) * 45); // 顺时针旋转45度
      ctx.scale(1.1, 1.1); // 坐标轴放大1.1倍
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
