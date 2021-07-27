export interface IUser {
  id:number;
  name:string;
  username:string;
  email:string;
  address: {
    street: string;
    suite: string;
    city: string;
  }
}
