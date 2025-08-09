import { Component, input } from '@angular/core';
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
  items: GalleryItem[] = [];

  gridSize = 3;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit(): void {
    this.items = this.images().map(
      (item) => new ImageItem({ src: item, thumb: item })
    );

    this.gridSize = Math.min(Math.max(this.images().length, 2), 4);

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Top,
      thumbs: true,
      loop: true,
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
}
