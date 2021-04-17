import { v4 as uuid } from 'uuid'

export class Service {
   
  public readonly id: string;
  public title: string;
  public value: Number;
  public establishmentID: string;
  public date: Date;

  constructor(props: Omit<Service, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
