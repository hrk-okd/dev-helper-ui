import { Service, ServiceItem } from '../model/Service'

export const ServicesApi = (serviceCode: string): ServiceItem[] => {
  const dataList: Service[] = [
    { serviceCode: 'S0001', serviceName: 'サービス1', createDate: '2020/04/25' },
    { serviceCode: 'S0002', serviceName: 'サービス2', createDate: '2021/10/22' },
    { serviceCode: 'S0003', serviceName: 'サービス3', createDate: '2021/10/22' },
    { serviceCode: 'S0004', serviceName: 'サービス4', createDate: '2021/10/22' },
    { serviceCode: 'S0005', serviceName: 'サービス5', createDate: '2021/10/22' },
  ];

  if (serviceCode) {
    const result = dataList.filter((data: ServiceItem) => data.serviceCode.startsWith(serviceCode));
    return result;
  } else {
    return dataList;
  }
};

