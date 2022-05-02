import { PayloadAction } from "@reduxjs/toolkit";

export interface ILoginUserInfo {
    userName: string;
}

//* INFO Data object that will be store in Redux.
export interface IStoreData {
    loginUserInfo: ILoginUserInfo;
}

//* INFO Used to sign the action that will be logged.
export interface ILogAction<T> extends PayloadAction<T>{
    
}