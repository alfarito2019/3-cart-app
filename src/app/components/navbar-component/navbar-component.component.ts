import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'navbar-component',
  imports: [],
  templateUrl: './navbar-component.component.html',
})
export class NavbarComponentComponent {
  @Input() items: CartItem[] = [];
  @Output() openEventEmitter = new EventEmitter();

  openCart(): void {
    this.openEventEmitter.emit();
  }
}
