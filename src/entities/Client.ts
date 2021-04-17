import { uuid } from 'uuidv4'

export class Client {
   
  public readonly id: string;
  public email: string;
  public password: string;
  public corporateName: string;

  constructor(props: Omit<Client, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
