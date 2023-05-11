//exam
//task 1
const dividensNum = (n) => {
  let newArr = []
    for(let i = 100;i<=1000;i++){
      if(i%n==0){
        newArr.push(i)
      }
    }
    return newArr
}

console.log(dividensNum(50));
console.log(dividensNum(70));
console.log(dividensNum(85));

//task 2

const swapCase = (string) =>{
  let empty = ""
  for(let i = 0; i<string.length;i++){
    if(string[i] === string[i].toUpperCase() ){
       empty += string[i].toString().toLowerCase() 
    }
    if(string[i] === string[i].toLowerCase()){
      empty +=  string[i].toString().toUpperCase()
    }
  }
  return empty
}

console.log(swapCase("AbCd"));
console.log(swapCase("jAvaScRIPt"));
console.log(swapCase("Fazil"));

//task 3
let numbers = [1,4,7,8,3,5,0,2,4,6,12,15,18,46,45,48,97,84,90];
let countEven = 0;
let countOdd = 0
const numShow = (num)=>{
 
  for(let i = 0; i<num.length;i++){
    if(num[i]%2==0){
        countEven++
    }
    else{
       countOdd++
        
    }
  }
  console.log(countEven);
console.log(countOdd);
  
}
numShow(numbers)
