import { Location } from "../../../entities/Establishment";

export interface ICreateEstablishmentRequestDTO {
    location: Location;
    email: string;
    password: string;
    corporateName: string;
}
