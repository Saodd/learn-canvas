import * as React from 'react';
import styles from './index.scss';

export function App(): JSX.Element {
  const cRef = React.useRef<HTMLCanvasElement>();
  React.useEffect(() => {
    const ctx = cRef.current.getContext('2d');

    const rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    const circle = new Path2D();
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);

    const svg = new Path2D('M10 10 h 80 v 80 h -80 Z');
    ctx.stroke(svg)
  }, []);

  return (
    <div>
      <canvas width={800} height={800} ref={cRef} className={styles.myCanvas}>
        请使用最新的浏览器
      </canvas>
    </div>
  );
}
