export interface ICompany{
    key: string;
    name: string;
    title: string;
    dataIndex: string;
    editable: boolean;
    countryCode: string;
    phone: string;
    region: string;
    city: string;
    street: string;
    building: string;
    email: string;
    isVerify: boolean;
}
export interface IMasterUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    // editable: boolean;
}

export interface IBranch {
    key: string;
    name: string;
    email: string;
    countryCode: string;
    phone: string;
    region: string;
    city: string;
    street: string;
    building: string;  
    wifiName: string;
    wifiPass: string;
    imgLink: string;
}
export interface IMenu {
    key: string;
    name: string;
    imgUrl: string;
    show: boolean;
}
export interface IProduct {
    key: string;
    name: string;
    imgUrl: string;
    show: boolean;
    pric: Float32Array
}
export interface IAdminContentTableType1 {
    data: any[];
    columns: any[];
}
export interface IAdminContentTableType2 {
    data: any[];
    columns: any[];
}