import ILogEntity from "./log-types";

export default class LoggingService {
    log(methodName: string, args: unknown[], result: unknown, error: Error) {
        const logEntity: ILogEntity = {
            methodName: methodName,
            params: args,
            result: result,
            error: error
        };

        console.log(`Log ${methodName}`, logEntity);
    }
}

