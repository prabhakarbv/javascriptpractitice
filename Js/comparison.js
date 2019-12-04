function test(question,yes,no){
    if(question == 'yes')
        yes();
    else    
        no(question);    
}


function sayYes(){
    console.log("it is YES");
}

function sayNo(question){
    console.log("it is NO - actual is "+question);
}

//test("yes1",sayYes,sayNo);
//--------------------------------------
function test1(question,yes,no,final){
    if(question == 'yes')
     sayYes();
    else if(question == 'yes1')  { 
        sayNo(question); 
    }
    else{
        final();       
    }
}


function sayYes(){
    console.log("it is YES");
}

function sayNo(question){
    console.log("it is NO - actual is "+question);
}

test1("yes1")


// test1("yes",()=>console.log("it is YES"),
// question =>{console.log("it is NO - actual is "+question)},
// ()=>console.log("it is FINAL"))
