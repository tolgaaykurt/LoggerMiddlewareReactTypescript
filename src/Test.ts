import { logClass } from "./decorators/logging/log-class";
import { logFunction } from "./decorators/logging/log-function";

@logClass("all")
export class TestClass {

    private readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    @logFunction("all")
    testFunction1(num1: number, num2: number): number {
        return num1 + num2;
    }

    @logFunction("all")
    testFunction2(num1: number, num2: number): any {
        const result: { number1: number, number2: number } = {
            number1: num1,
            number2: num2
        };

        return result;
    }

    @logFunction("all")
    testMethod1(num1: number, num2: number): void {
        console.log("Called testMethod1");
    }
}