export default interface IContact {
    id?: string;
    name: string;
    contact: string;
    type: 'email' | 'phone' | string;
}