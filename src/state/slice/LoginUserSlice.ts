import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogAction, ILoginUserInfo, IStoreData } from "../store/StoreTypes";

const initialLoginUserInfo = <ILoginUserInfo>{};
const initialState = { loginUserInfo: initialLoginUserInfo } as IStoreData;

const loginUserSlice = createSlice({
    name: "loginUserSlice",
    initialState,
    reducers: {
        loginUser(state, action: ILogAction<ILoginUserInfo>) {
            state.loginUserInfo = action.payload;
        },
        logOutUser(state, action: ILogAction<any>) {
            state.loginUserInfo = {} as ILoginUserInfo;
        },
        getUserInfo(state) {
            return state;
        }
    }
});

export const { loginUser, logOutUser } = loginUserSlice.actions;
export default loginUserSlice.reducer;