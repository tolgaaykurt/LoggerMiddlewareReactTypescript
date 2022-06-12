/**================================================================================================
 * LOOK AT BELOW LINKS FOR DEATAIL OF TYPESCRIPT DECORATORS
 ==================================================================================================
 * https://www.typescriptlang.org/docs/handbook/decorators.html
 * https://blog.bitsrc.io/decorators-javascript-and-typescript-hidden-gems-600038bcbd44
 *================================================================================================**/
import ILogEntity from '../../services/logging/log-types';
import { LoggingType } from './logging-types';

export function log(loggingType: LoggingType) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const toBeCalledMethod: Function = descriptor.value;

        // lets start...
        descriptor.value = (...args: any[]) => {
            let methodResult: unknown;

            /**----------------------
             *        LOGGING
             *-----------------------**/
            switch (loggingType) {
                case 'all':
                    methodResult = logAll(toBeCalledMethod, target, args);
                    break;
                case 'onlyErrors':
                    //TODO: log only errors.
                    break;
                case 'onlyParameters':
                    //TODO: log only method args.
                    break;
                case 'onlyResult':
                    //TODO: log only function results.
                    break;
            }
            /*---- END OF LOGGING ----*/

            return methodResult;
        }
    };
}

function logAll(toBeCalledMethod: Function, target: any, args: any[]) {

    const logEntity: ILogEntity = {
        methodName: toBeCalledMethod.name
    }

    try {
        if (args.length > 0) {
            logEntity.params = [];

            args.map((val: any) => {
                if (logEntity.params) {
                    logEntity.params.push(val);
                }
            });
        }

        try {
            logEntity.result = toBeCalledMethod.apply(target, logEntity.params);
        }
        catch (error) {
            logEntity.error = error as Error;
        }

        console.log("LogAll", logEntity);
    }
    catch (error) {
        console.log("LogAll Error", error);
    }

    return logEntity.result;
}
