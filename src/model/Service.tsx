
export interface Service {
  serviceCode: string;
  serviceName: string;
  createDate: string;
}

export type ServiceItem = Pick<Service, 'serviceCode' | 'serviceName'>

// export class Customer {
//   customerCode: string;
//   customerName: string;

//   constructor(customerCode: string, customerName: string) {
//     this.customerCode = customerCode;
//     this.customerName = customerName;
//}


