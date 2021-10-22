import * as React from 'react';
import styles from './index.scss';

export function App(): JSX.Element {
  const ref = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
    const canvas = ref.current.children[0] as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    // 先画剪辑路径
    ctx.beginPath();
    ctx.arc(100, 100, 60, 0, Math.PI * 2, true);
    ctx.clip();
    // 再画被剪辑的图形
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 120, 120);
  }, []);

  return (
    <div className={styles.body} ref={ref}>
      <canvas width={200} height={200}>
        请使用最新的浏览器
      </canvas>
    </div>
  );
}
