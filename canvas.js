

/* canvas.js */ const canvas = document.getElementById('bg-canvas'); const ctx = canvas.getContext('2d');

let width, height; function resize() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; } window.addEventListener('resize', resize); resize();

const gravity = 0.2; const friction = 0.99; const balls = []; const colors = ['#ff6b6b', '#6bc1ff', '#ffd93d', '#9dff6b', '#ff8cc6']; const mouse = { x: null, y: null };

window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

class Ball { constructor(x, y, dx, dy, r, color) { this.x = x; this.y = y; this.dx = dx; this.dy = dy; this.r = r; this.baseR = r; this.color = color; }

draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fillStyle = this.color; ctx.fill(); ctx.closePath(); }

update() { // gravity if (this.y + this.r + this.dy > height) { this.dy = -this.dy * friction; } else { this.dy += gravity; } if (this.x + this.r + this.dx > width || this.x - this.r <= 0) { this.dx = -this.dx * friction; } this.x += this.dx; this.y += this.dy;

// collision detection
for (let other of balls) {
  if (this !== other) {
    const dist = Math.hypot(this.x - other.x, this.y - other.y);
    if (dist < this.r + other.r) {
      // simple elastic collision: swap velocities
      [this.dx, other.dx] = [other.dx, this.dx];
      [this.dy, other.dy] = [other.dy, this.dy];
    }
  }
}

// mouse interaction: grow on hover
if (mouse.x && mouse.y) {
  const distMouse = Math.hypot(this.x - mouse.x, this.y - mouse.y);
  if (distMouse < this.r * 1.5 && this.r < this.baseR * 1.5) {
    this.r += 1;
  } else if (this.r > this.baseR) {
    this.r -= 1;
  }
}

this.draw();

} }

function init(num = 50) { balls.length = 0; for (let i = 0; i < num; i++) { const r = Math.random() * 20 + 10; let x = Math.random() * (width - 2 * r) + r; let y = Math.random() * (height - 2 * r) + r; const dx = (Math.random() - 0.5) * 4; const dy = (Math.random() - 0.5) * 4; const color = colors[Math.floor(Math.random() * colors.length)]; balls.push(new Ball(x, y, dx, dy, r, color)); } }

function animate() { requestAnimationFrame(animate); ctx.clearRect(0, 0, width, height); balls.forEach(ball => ball.update()); }

init(); animate();

