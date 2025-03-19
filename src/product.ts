export class Product {
  constructor(id: number, name: string, compan: string, price: number, isShow: boolean, createDate: Date, modifyDate: undefined | Date) {
    this.id = id;
    this.name = name;
    this.compan = compan;
    this.price = price;
    this.isShow = isShow;
    this.createDate = createDate;
    this.modifyDate = modifyDate;
  }

  id: number;
  name: string;
  compan: string;
  price: number;
  isShow: boolean;
  createDate: Date;
  modifyDate: undefined | Date;
}
