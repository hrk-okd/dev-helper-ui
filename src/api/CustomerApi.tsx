import { Customer } from '../model/Customer'

export const CustomerApi = (customerCode: string): Customer => {
  const dataList: Customer[] = [
    { customerCode: '1010001056171', customerName: 'プラムカーペットサービス株式会社', createDate: '2021/10/22' },
    { customerCode: '8430001055703', customerName: '株式会社カイト', createDate: '2021/10/22' },
  ];
  return dataList[0];
};

