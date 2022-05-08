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

const customer = {
    customerName : customerName,age,address,//ในกรณีที่จะเอาatribliteมาเป็นข้อมูลในobjectสามารถเขียนแบบนี้ได้

    showData(){
        console.log("ชื่อผู้ใช้ : "+customerName);
    }
}
//String
const address2 = "เกียรตินำชัย อินทร์นอก ที่อยู่ 206 หมู่ 1 ต.หินดาด อ.ห้วยแถลง จ.นครราชสีมา เบอร์โทรติดต่อ 0983395822"
const address3 = `เกียรตินำชัย อินทร์นอก
                ที่อยู่ 206 หมู่ 1 ต.หินดาด อ.ห้วยแถลง จ.นครราชสีมา 
                เบอร์โทรติดต่อ 0983395822` //ขึ้นบรรทัดข้อความยาวๆ
    //ตัวแปรต่อString
let name = "เกียรตินำชัย อินทร์นอก"
let telphone = "0983395822"
const address4 = `${name}
                ที่อยู่ 206 หมู่ 1 ต.หินดาด อ.ห้วยแถลง จ.นครราชสีมา 
                เบอร์โทรติดต่อ ${telphone}`

//main
console.log(name("big","innork"));
console.log(customer);
customer.showData();
