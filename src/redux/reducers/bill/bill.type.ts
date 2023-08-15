export type BillState = {
  address: string
  payment: string
  phoneNumber: string
  products: [{ id: string; amount: number }]
  total: number
  userId: string
  _id: string
}
