import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-text',
  imports: [NgClass],
  templateUrl: './icon-text.component.html',
  styleUrl: './icon-text.component.scss',
})
export class IconTextComponent {
  @Input() text!: string;
  @Input() icon!: string;
  @Input() small: boolean = false;
}
