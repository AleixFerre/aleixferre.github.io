import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric-container',
  imports: [NgClass],
  templateUrl: './metric-container.component.html',
  styleUrl: './metric-container.component.scss',
})
export class MetricContainerComponent {
  @Input() title: string = '';
  @Input() number?: string = '';
  @Input() symbol: string = '';
  @Input() numberAfterSymbol?: string = '';
  @Input() description: string = '';
  @Input() small?: boolean = false;
}
