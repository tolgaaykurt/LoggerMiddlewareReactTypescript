import { createSlice } from "@reduxjs/toolkit";
import { ILogAction, ILoginUserInfo, IStoreData } from "../store/StoreTypes";

const initialLoginUserInfo: ILoginUserInfo = {} as ILoginUserInfo;
const initialState = { loginUserInfo: initialLoginUserInfo } as IStoreData;

const loginUserSlice = createSlice({
    name: "loginUserSlice",
    initialState,
    reducers: {
        loginUser(state: IStoreData, action: ILogAction<ILoginUserInfo>) {
            state.loginUserInfo = action.payload;
        },
        logOutUser(state: IStoreData, action: ILogAction<unknown>) {
            state.loginUserInfo = {} as ILoginUserInfo;
        },
        getUserInfo(state: IStoreData) {
            return state;
        }
    }
});

export const { loginUser, logOutUser } = loginUserSlice.actions;
export default loginUserSlice.reducer;