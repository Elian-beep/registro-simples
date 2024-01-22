import IAddress from "./IAddress";
import IContact from "./IContact";

export default interface IPerson {
    id?: string;
    name: string;
    lastname: string;
    birthday: string;
    email: string;
    cpf: string;
    rg: string;
    address?: IAddress[];
    contacts?: IContact[];
}