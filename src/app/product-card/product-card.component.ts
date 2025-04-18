import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  productName = '書籍A';
  author = '作者甲、作者乙、作者丙';
  company = '博碩文化';

  photoUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';

  isShow = true;

  onSetDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}
