import * as React from 'react';
import styles from './index.scss';

export function App(): JSX.Element {
  const ref = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
    const canvas = ref.current.children[0] as HTMLCanvasElement;
    const width = 800;
    const ctx = canvas.getContext('2d');
    // 黑色背景
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, width);
    // 圆形视窗
    ctx.beginPath();
    ctx.arc(width / 2, width / 2, (width / 2) * 0.95, 0, Math.PI * 2, true);
    ctx.clip();
    // 视窗背景
    {
      const lingrad = ctx.createLinearGradient(0, width / 4, width, (width / 4) * 3);
      lingrad.addColorStop(0, '#232256');
      lingrad.addColorStop(1, '#143778');
      ctx.fillStyle = lingrad;
      ctx.fillRect(0, 0, width, width);
    }
    // 准备星星
    const star = document.createElement('canvas');
    {
      const r = 6;
      star.setAttribute('width', (r * 2).toFixed());
      star.setAttribute('height', (r * 2).toFixed());
      const ctx = star.getContext('2d');
      ctx.translate(r, r);
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.moveTo(r, 0);
      for (let i = 0; i < 9; i++) {
        ctx.rotate(Math.PI / 5);
        if (i % 2 === 0) {
          ctx.lineTo((r / 0.525731) * 0.200811, 0);
        } else {
          ctx.lineTo(r, 0);
        }
      }
      ctx.closePath();
      ctx.fill();
    }
    // 复制星星
    for (let i = 0; i < 100; i++) {
      ctx.save();
      ctx.translate(Math.random() * width, Math.random() * width);
      ctx.rotate(Math.random() * Math.PI);
      const scale = Math.random() + 0.5;
      ctx.scale(scale, scale);
      ctx.drawImage(star, 0, 0);
      ctx.restore();
    }
  }, []);

  return (
    <div className={styles.body} ref={ref}>
      <canvas width={800} height={800}>
        请使用最新的浏览器
      </canvas>
    </div>
  );
}
