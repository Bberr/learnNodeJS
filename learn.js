//var -> Global Variable
//let -> local Variable
//const -> constant

//old function
function name(fristName,lastName){
    return fristName+lastName
}
//arrow function
name=(fristName,lastName)=>fristName+lastName
//object
const customerName = "big"
const age = 20
const address = "มหาสารคาม"

const customer = {customerName : customerName,age,address}//ในกรณีที่จะเอาatribliteมาเป็นข้อมูลในobjectสามารถเขียนแบบนี้ได้
//main
console.log(name("big","innork"))
console.log(customer);
