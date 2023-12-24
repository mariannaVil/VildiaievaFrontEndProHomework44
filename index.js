import {a, b} from "./components/constant.js"
import Calculator from "./components/module.js";

const calculator = new Calculator(a, b);
console.log(calculator.add());
console.log(calculator.sub());
console.log(calculator.div());
console.log(calculator.mult());
