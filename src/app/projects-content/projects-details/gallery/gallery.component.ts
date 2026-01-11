import { Component, HostListener, input } from '@angular/core';
import { UnpicImageDirective } from '@unpic/angular';
import {
  Gallery,
  GalleryItem,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
} from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-gallery',
  imports: [LightboxModule, UnpicImageDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  readonly images = input<string[]>([]);
  readonly thumbs = input<string[] | null>(null);
  items: GalleryItem[] = [];

  gridSize = 3;

  @HostListener('window:resize')
  onResize() {
    this.recalculateGalleryCount();
  }

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  private recalculateGalleryCount() {
    if (window.innerWidth < 1000) {
      this.gridSize = 1;
    } else {
      this.gridSize = Math.min(Math.max(this.images().length, 2), 4);
    }
  }

  ngOnInit(): void {
    const thumbs = this.thumbs();
    this.items = this.images().map(
      (item, index) =>
        new ImageItem({ src: item, thumb: thumbs?.[index] ?? item })
    );

    this.recalculateGalleryCount();

    const lightboxRef = this.gallery.ref('lightbox');
    lightboxRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Top,
      thumbs: true,
      loop: true,
    });
    lightboxRef.load(this.items);
  }

  displayImages() {
    const thumbs = this.thumbs();
    return thumbs && thumbs.length ? thumbs : this.images();
  }
}
