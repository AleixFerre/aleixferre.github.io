import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-background-stars',
  imports: [],
  templateUrl: './background-stars.component.html',
  styleUrl: './background-stars.component.scss',
})
export class BackgroundStarsComponent {
  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private stars: any[] = [];
  private width = 0;
  private height = 0;
  private numStars = 300;

  ngAfterViewInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
    this.resize();
    this.initStars();
    this.animate();
  }

  @HostListener('window:resize')
  resize() {
    this.width = this.canvasRef.nativeElement.width = window.innerWidth;
    this.height = this.canvasRef.nativeElement.height = window.innerHeight;
  }

  initStars() {
    this.stars = Array.from({ length: this.numStars }).map(() => ({
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      radius: Math.random() * 1.2 + 0.2,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
    }));
  }

  animate = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = 'white';
    for (const star of this.stars) {
      star.x += star.vx;
      star.y += star.vy;

      if (star.x < 0 || star.x > this.width) star.vx *= -1;
      if (star.y < 0 || star.y > this.height) star.vy *= -1;

      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }
    requestAnimationFrame(this.animate);
  };
}
