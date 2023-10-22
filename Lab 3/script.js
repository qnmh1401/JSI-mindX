class Student {
    constructor(name, age){
        this.name = name
        this.age = age
       
    }
    doRun(){
        console.log("run")
    }    
}

const student = new Student("dat", 18)
const student2 = new Student("hoang", 16)

console.log(student)
console.log(student2)
