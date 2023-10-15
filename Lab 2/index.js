// let arr = [1, 2, 3, 5]

// let arr2 = [...arr]

// let arr3 = arr.slice()
// console.log(arr3)

// let arrA = ['Hello', ' Xin chào']
// let arrB = ['Bonjour', 'Olá']
// let arrC = [...arrA,...arrB]
// console.log(arrC)
// let arrD =arrA.concat(arrB)
// console.log(arrD)

// let arrX = [0,1,2,3,4,5,6,7,8]
// const arrSquare = arrX.map(
//     (value, index) => {
//         return value**2
//     }
// )
// console.log(arrSquare)



// // for(let x = 0; x < arrX.length; x++){
// //     if(arrX[x] % 2 != 0){
// //         arrOdds.push(arrX[x])
// //     }

// // }
// // console.log(arrOdds)

// const arrOdds = arrX.map((value,index) => {
//     if(value % 2 != 0){
//         return value
        
//     }
// })
// console.log(arrOdds)

let student = [
    {
        name: "Duong",
        age: 11,
        hobbies: ["video game","sleep","learn"]
    },
    {
        name: "Dong",
        age: 12,
        hobbies: ["video game","sick","study"]
    },
    {
        name: "Minh",
        age: 13,
        hobbies: ["video game","sick","learn"]
    },
    {
        name: "Thanh",
        age: 9,
        hobbies: ["play game","sleep","learn"]
    },
    {
        name: "Hung",
        age: 11,
        hobbies: ["play game","sick","study"]
    }
]

var ageInput = prompt("Nhap tuoi can tim")
for (let i = 0; i < student.length; i++){
    if(student[i].age == ageInput){
        alert(student[i].name)
    }
}