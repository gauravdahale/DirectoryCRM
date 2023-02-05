export interface Order {
  alternateNumber: string
  billamount: number
  billno: number
  cartlist: Cartlist[]
  deliverycharge: number
  discount: number
  landmark: string
  payment_method: string
  paymentstatus: string
  place: string
  remark: string
  shopaddress: string
  shopname: string
  shopnumber: string
  shopowner: string
  status: string
  timestamp: number
  totalamount: number
  userdetail: Userdetail
}

export interface Cartlist {
  amount: number
  id: number
  image: string
  key: string
  name: string
  notinstock: boolean
  price: number
  size: Size[]
  totalitemamount: number
  type: number
  vid: number
}

export interface Size {
  itemname: string
}

export interface Userdetail {
  address: string
  landmark: string
  muid: string
  usermobile: string
  username: string
}
