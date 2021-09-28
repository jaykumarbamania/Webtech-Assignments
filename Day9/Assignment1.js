
 let oddNums = () =>{
    let array = []
    for(var i =1; i<=20;i++){
        if(i%2 == 1)
            array.push(i)
    }
    console.log(array)
    document.getElementById("display1").innerHTML=array
    
 }

 function checkprimenumber(n){
    for (c=2; c<=n - 1; c++){
      if ( n%c == 0 ){
        return false;
      }
      return true;
   }
}

function printprimenumber(number){
    
    if(checkprimenumber(number) == true)
       document.write(number)
    
}

 let primeNumbers = (maxnum) => {
    let primeArr = []
    for (i=1; i<=maxnum; i++){
        primeArr.push(printprimenumber(i));
       }
    document.getElementById("display2").innerHTML = primeArr
 }

 function fibonacci(terms){
    if( terms <= 1)
        return terms;
    return fibonacci(terms - 1) + fibonacci(terms - 2);
}

 let fibonacciSeries = val => {
    // let a0 = 0, a1 = 1, a2 = a1+a0
    let seriesArr = []
    // if(!val) {seriesArr = []}
    // else if(val == 1) seriesArr.push(0)
    // else if(val == 2) {
    //     seriesArr.push(0)
    //     seriesArr.push(1)
    //     console.log(seriesArr)
    // } 
    // else{
    //     seriesArr.push(0)
    //     seriesArr.push(1)
    //     for(var i = 0; i<=val;i++){
    //         if(a2 <= val){
    //             a0 = a1
    //             a1 = a2
    //             seriesArr.push(a2)
    //             a2 = a0 + a1
                
    //         }
    //     }
    //     console.log(seriesArr)
    //}
    for(let i = 0; i< val;i++){
        seriesArr.push(fibonacci(i))
    }
    document.getElementById("display3").innerHTML=seriesArr
 }

let reverseDigits = num =>{
    console.log(num)
    let digit,rev = 0
    // let num1 = parseFloat(num)
    // do{
    //     unit = num%10
    //     rev = (rev*10) +unit
    //     num = num/10
    // }while(num !=0 )

    while(num != 0){
        digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num/10)
    }

    console.log(typeof rev)
    document.getElementById("display4").innerHTML=rev
}

let CopyContent = () =>{
    let content1 = document.getElementById("content1").innerHTML

    console.log(content1)
    document.getElementById("content2").innerHTML = content1
}


let salaryArray = [90000, 99000, 78000, 37000, 36000, 81000, 79999,82000]
let ageArray = new Array(34,56,12,35,67)
document.getElementById('InitialFilter').innerHTML=salaryArray
document.getElementById('InitialFind').innerHTML=salaryArray
document.getElementById('InitialMap').innerHTML=salaryArray
document.getElementById('InitialReduce').innerHTML=ageArray

let filterFunc = () =>{
    let newSalaryArr = salaryArray.filter(salary => salary < 80000);

    document.getElementById("display8").innerHTML=newSalaryArr
}

let findFunc = () =>{
    let newSalaryArr = salaryArray.find(salary => salary < 80000);

    document.getElementById("display9").innerHTML=newSalaryArr
}

let mapFunc = () =>{
    let newSalaryArr = salaryArray.map(salary => salary/2);

    document.getElementById("display10").innerHTML=newSalaryArr
}

let reduceFunc = () =>{
    let newAgeArr = ageArray.reduce((total, currentValue) => total+ currentValue)

    document.getElementById("display11").innerHTML=newAgeArr
}
