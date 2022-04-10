
export interface Customer {
  customerCode: string;
  customerName: string;
  createDate: string;
}

export type CustomersItem = Pick<Customer, 'customerCode' | 'customerName'>

// export class Customer {
//   customerCode: string;
//   customerName: string;

//   constructor(customerCode: string, customerName: string) {
//     this.customerCode = customerCode;
//     this.customerName = customerName;
//}


