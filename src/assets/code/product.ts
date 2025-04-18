export class Product {
  constructor(
    public id: number,
    public name: string,
    public compan: string,
    public price: number,
    public isShow: boolean,
    public createDate: Date,
    public modifyDate?: undefined | Date
  ) {}

  setDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}
