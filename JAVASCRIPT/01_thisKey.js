const students={
    name:"sarita",
    age:23,
    eng:95,
    math:89,
    phy:95,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${avg}`);
        // console.log(students.getAvg());
    },

     
}
students.getAvg();
console.log(students.getAvg());
