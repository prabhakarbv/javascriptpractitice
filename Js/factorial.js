// function Fact(x){
//     result = 1;
//     for(var i=1;i<=x;i++){
//         result = result*i
//     }
//     return result;
// }

// console.log(Fact(1));



function Fact(n) {
    console.log("2222222222222222222222222222222222222222222")
    //result =1
    if (n == 1) {
      return 1;
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    } else {
        console.log (" ---------------- " +n)
        return n * Fact(n - 1);
        console.log (" -#########################--------------- " +n);
    }
  }
  

  console.log(Fact(3));