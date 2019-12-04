var arr =[10,1,2,4,5,6];
arr.test = "my test";
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
};
console.log("------------------------------------------");
for(let i in arr ){
    console.log(i);
}
console.log("------------------------------------------");

for(let i of arr){
    console.log(i);
}