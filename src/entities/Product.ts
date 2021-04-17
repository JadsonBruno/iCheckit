import { v4 as uuid } from 'uuid'

export class Product {
   
  public readonly id: string;
  public description: string;
  public name: string;
  public value: Number;

  constructor(props: Omit<Product, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
