// type conversion or coercion

console.log("20" + 5) //205 -string concatenation
console.log("20" - 5) //15 -converted to integer
console.log("20" * 5) //100
console.log("20" / 5) //4

console.log(true + 1) //2 => 1 + 1
console.log(false + 1) //1 => 0 + 1

console.log(Number("42")) //42
console.log(Number("Hello")) //NaN

console.log(typeof String(123)) //string
console.log(String(123)) //123
console.log(String (true))  // true

console.log(Boolean(0)) //false
console.log(Boolean(1)) //true
console.log(Boolean('')) //false
console.log(Boolean('Hello')) //true

console.log(parseInt('15.58')) //15
console.log(parseFloat('14.01')) //14.01