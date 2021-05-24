import { uuid } from 'uuidv4';

export interface Location {
    lat: string;
    long: string;
}

export class Establishment {

  public readonly id: string;
  public email: string;
  public password: string;
  public corporateName: string;
  public location: Location;

  constructor(props: Omit<Establishment, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
