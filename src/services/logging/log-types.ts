export default interface ILogEntity{
    methodName: string;
    params?: unknown[];
    result?: unknown;   
    error?: Error;
}