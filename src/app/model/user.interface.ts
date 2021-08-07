export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  website: string
}
interface Address {
  city: string,
  street: string
}
