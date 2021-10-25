import * as React from 'react';
import styles from './index.scss';

export function App(): JSX.Element {
  const ref = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
    const canvas = ref.current.children[0] as HTMLCanvasElement;
    ctx = canvas.getContext('2d');
    init();
    window.requestAnimationFrame(draw);
  }, []);
  React.useEffect(() => {
    const canvas = ref.current.children[1] as HTMLCanvasElement;
    const ctx1 = canvas.getContext('2d');
    ctx1.fillStyle = 'red';
    ctx1.fillRect(0, 0, 50, 50);
  });

  return (
    <div className={styles.body} ref={ref}>
      <canvas width={800} height={800} style={{ zIndex: 1 }}>
        请使用最新的浏览器
      </canvas>
      <canvas width={800} height={800} style={{ zIndex: 2 }}>
        （这是第二层）
      </canvas>
    </div>
  );
}

let ctx: CanvasRenderingContext2D = null;
let x = 0;
let y = 0;

function init() {
  window.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
  });
}

function draw() {
  ctx.save();
  {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, 800, 800);
    ctx.fillStyle = 'white';
    ctx.translate(x, y);
    ctx.fillRect(-5, -5, 5, 5);
  }
  ctx.restore();
  window.requestAnimationFrame(draw);
}
