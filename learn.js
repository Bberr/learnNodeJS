//var -> Global Variable
//let -> local Variable
//const -> constant
//ใน JS ทำ overloading method ไม่ได้เด้อ

//old function
function name(fristName,lastName){
    return fristName+lastName
}
//arrow function
name=(fristName,lastName)=>fristName+lastName//arrow function ถ้าไม่มีการคำนวนไม่ต้องมี {} ก็ได้
console.log(name("big","innork"));

//object
const customerName = "big"
const age = 20
const address = "มหาสารคาม"
const customer = {
    customerName : customerName,age,address,//ในกรณีที่จะเอาatribliteมาเป็นข้อมูลในobjectสามารถเขียนแบบนี้ได้

    showData(){
        console.log("ชื่อผู้ใช้ : "+customerName);
    }
}
console.log(customer);
customer.showData();

//String
const address2 = "เกียรตินำชัย อินทร์นอก ที่อยู่ 206 หมู่ 1 ต.หินดาด อ.ห้วยแถลง จ.นครราชสีมา เบอร์โทรติดต่อ 0983395822"
const address3 = `เกียรตินำชัย อินทร์นอก
                ที่อยู่ 206 หมู่ 1 ต.หินดาด อ.ห้วยแถลง จ.นครราชสีมา 
                เบอร์โทรติดต่อ 0983395822` //ขึ้นบรรทัดข้อความยาวๆ
    //ตัวแปรต่อString
let namee = "เกียรตินำชัย อินทร์นอก"
let telphone = "0983395822"
const address4 = `${namee}
                ที่อยู่ 206 หมู่ 1 ต.หินดาด อ.ห้วยแถลง จ.นครราชสีมา 
                เบอร์โทรติดต่อ ${telphone}`

//Space Operator กระจายข้อมูลใน arr หนึ่ง ไปใส่ในอีก arr หนึ่ง
const newArr = [100,200,300]
const data = [10,20,...newArr]//Space Operator
data.push(...newArr)//Space Operator
    //ถ้าไม้มี...จะกลายเป็นArr2D

//Rest Parameter เป็นการใช้ Space Operator ในฟังก์ชัน
sumulation=(...numArr)=>{
    let total = 0
    for(let number of numArr) total += number
    return total
}

//Destructuring การสลายโครงสร้าง
const colors = ["ขาว","แดง"]
    //old
let x = colors[0]
let y = colors[1]
    //Destructuring
const [a,b] = colors
console.log(a)
console.log(b)
    //เอาแค่ตัวใดตัวหนี่ง
const [,c] = colors //เอาแดง
const [d,] = colors //เอาขาว
    //ใช้กับobject
const product = {
    productName : "computer",
    price : 30000,
    stock : 10
}
        //old
const named = product.productName
const price = product.price
const stock = product.stock
        //Destructuring
const {e,f,g} = product
//******arr use [] | object use {}******

//join, concat
const dataaa = [100,200,300]
console.log(data)
//joinเปลี่ยน arr เป็น str
const resultt = data.join();
resultt = data.join("-");
//concat การต่อarr
const one = [100,200]
const two = [300,400,500]
one.concat(two)

// push, pop, shift, unshift
const deta = [10,20,30]
deta.push(40)
