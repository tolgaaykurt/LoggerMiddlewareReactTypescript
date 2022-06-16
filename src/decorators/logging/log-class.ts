import { LoggingType } from "./logging-types";

export function logClass(loggingType: LoggingType, logKey?: string) {
    return function <T extends { new(...args: any[]): {} }>(
        ctr: T
    ) {
        return class extends ctr {

            constructor(...args: any[]) {
                logAll(loggingType, logKey ?? ctr.name, args);

                try {
                    super(...args);
                }
                catch (error) {
                    logError(loggingType, logKey ?? ctr.name, error as Error);
                }
            }
        };
    }
}

function logAll(loggingType: LoggingType, logKey: string, args: any[]) {
    try {
        if (loggingType === "all" || loggingType === "onlyErrors") {
            console.log(logKey, args);
        }
    }
    catch (error) {
        console.error(logKey, error);
    }
}

function logError(loggingType: LoggingType, logKey: string, error: Error){
    try {
        if (loggingType === "all" || loggingType === "onlyErrors") {
            console.log(logKey, error);
        }
    }
    catch (error) {
        console.error(logKey, error);
    }
}