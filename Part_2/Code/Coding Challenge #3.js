var Mark ={
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }

}

var John ={
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

// 
var markBMI = Mark.calcBMI().toFixed(2);
var johnBMI = John.calcBMI().toFixed(2);
console.log(markBMI, johnBMI);

if(markBMI > johnBMI){
    console.log(`${Mark.fullname} BMI ${markBMI} is heigher than ${John.fullname} BMI ${johnBMI}`)
}
else if(markBMI < johnBMI){
    console.log(`${John.fullname} BMI ${johnBMI} is heigher than ${Mark.fullname} BMI ${markBMI}`)
}
else{
    console.log(`${Mark.fullname} BMI ${markBMI} is equal to ${John.fullname}) BMI ${johnBMI}`)
    }