var date = new Date(1950,02,12);
console.log(date);
if(date instanceof Date){
    console.log(typeof(date));
}
console.log(Date(Date.now()).toString());
console.log(Date.toString());
console.log(Date.now(month));