import { Middleware, MiddlewareAPI } from "redux";
import { AppDispatch } from "../../store/Store";
import { ILogAction } from "../../store/StoreTypes";

export const logger: Middleware =
    (api: MiddlewareAPI) =>
        (next: AppDispatch) =>
            <A extends ILogAction<any>>(action: A): A => {
                /**========================================================================
                 *                           LOGGING
                 *========================================================================**/
                console.log(action.type, action.payload);
                const result = next(action);
                return result;
                /*============================ END OF LOGGING ============================*/
            };