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

  return (
    <div className={styles.body} ref={ref}>
      <canvas width={800} height={800}>
        请使用最新的浏览器
      </canvas>
    </div>
  );
}

const src = new Map<string, HTMLImageElement>();
let ctx: CanvasRenderingContext2D = null;

function init() {
  const BASE = 'https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations';

  const sun = new Image();
  const moon = new Image();
  const earth = new Image();

  sun.src = BASE + '/canvas_sun.png';
  moon.src = BASE + '/canvas_moon.png';
  earth.src = BASE + '/canvas_earth.png';

  src.set('sun', sun);
  src.set('moon', moon);
  src.set('earth', earth);
}

function draw() {
  const now = new Date();
  // console.log(now.getSeconds());
  ctx.save();
  ctx.clearRect(0, 0, 800, 800);
  {
    // 太阳
    ctx.drawImage(src.get('sun'), 0, 0, 800, 800);
  }
  {
    // 轨道
    ctx.save();
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    ctx.beginPath();
    ctx.arc(400, 400, 300, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
  {
    // 地球
    ctx.save();
    ctx.translate(400, 400);
    const angle = ((2 * Math.PI) / 60) * now.getSeconds() + ((2 * Math.PI) / 60 / 1000) * now.getMilliseconds();
    ctx.rotate(angle);
    ctx.translate(300, 0);
    ctx.drawImage(src.get('earth'), -12, -12,24,24);  // 地球直径24
    {
      // 月球
      ctx.save();
      ctx.rotate(-angle + angle * 10);
      ctx.drawImage(src.get('moon'), 24, 0);  // 月球轨道半径24
      ctx.restore();
    }
    ctx.restore();
  }

  ctx.restore();
  window.requestAnimationFrame(draw);
}
