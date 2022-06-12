import { ModuleResolutionKind } from "typescript";
import { log } from "./decorators/logging/log";

class TestClass{
    @log("all")
    testFunction1(num1: number, num2: number): number{
        return num1 + num2;
    }

    @log("all")
    testFunction2(num1: number, num2: number): any{
        const result : {number1: number, number2: number} = {
            number1: num1,
            number2: num2
        };

        return result;
    }

    @log("all")
    testMethod1(num1: number, num2: number): void{
        console.log("Called testMethod1");
    }
}

export default TestClass;