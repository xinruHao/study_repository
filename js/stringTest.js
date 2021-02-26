// ES6新增了使用模板字面量定义字符串的能力
let myMultiLineString = 'first line\nsecond line';
let myMultiLineTemplateLiteral = `first line
second line`;

console.log(myMultiLineString);
console.log(myMultiLineTemplateLiteral);
console.log(myMultiLineTemplateLiteral === myMultiLineString);

let pageHTML = `
<div>
    <a href="#">
        <span>Jake</span>
    </a>
</div>`;
console.log(pageHTML);


let value = 5;
let exponent = 'second';

let interpolatedString =
    value + ' to the ' + exponent + ' power is ' + (value*value);

let interpolatedLateLiteral =
    `${value} to the ${exponent} power is ${value*value}`;
console.log(interpolatedString);
console.log(interpolatedLateLiteral);
