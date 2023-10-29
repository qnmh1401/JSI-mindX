let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
    ]
var form = document.getElementById('prompt')
var course = prompt("Khóa học cần tìm????");

var found = false
for(let a = 0;
    a < student.length;
    a++){
    if(student[a].course.includes(course)){
        let result = document.createElement('p')
        result.innerHTML += student[a].name
        form.appendChild(result)

        found = true
    }

}

if(found == false){
    result.innerText = "Chưa có khóa học này"
}

console.log(typeof age);
var found = false

for(let a = 0;
    a < student.length;
    a++){
    if(student[a].age == age){
        result.innerText = student[a].name
        found = true
    }
}

if(found == false){
    result.innerText = "Không tìm thấy"
}
var i = 2
const anDanh = (i) => {
    console.log(i+1)
}

anDanh(6)


let arr1 = [0,2,4,6,8]
let arr2 = [1,3,5,7]

const newArr = [...arr1, ...arr2]
// const newArr = arr1.concat(arr2)
const abc = [a, ...rest] = arr1
console.log(a)
console.log(rest)
console.log(newArr)

const find = arr1.find(
(num) => {
    return num > 3
}
)

console.log(find)