var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise((resolve, reject)=> {
  i = 100;
  if(i==10){
    resolve("foo")
  }else{
      reject(" failed")
  }
});

Promise.all([promise2]).then(msg=>{
    console.log(msg)
}).catch(err=>{
    console.log(err)git
})

// promise2.then((msg)=>{
//     console.log(msg)
// })

// Promise.all([promise1, promise2, promise3]).then(function(values) {
//   console.log(values);
// }).catch(msg=>{
//     console.log(msg)
// });