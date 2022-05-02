import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import { logger } from "../middleware/logging/Logger";
import LoginUserSlice from "../slice/LoginUserSlice";

const store = configureStore({
    reducer: { loginUserSlice: LoginUserSlice },
    middleware: new MiddlewareArray(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

