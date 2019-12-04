var k = 1
for(var i=0;i<5;i++){
    k = k+i;
    function test(i) {
    setTimeout(() => {
        
       console.log(` in intervel ${k} -- `,i);
      
   }, 1000);
   
}
test(i);

};