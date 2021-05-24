import { v4 as uuid } from 'uuid'
import { Service } from '../../service/entity/Service';

export class Appointment {

  public readonly id: String;;
  public clientID: string;
  public date: Date;
  public stablishmentID: string;
  public service: Service;

  constructor(props: Omit<Appointment, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
