
let timerId= setInterval(() => console.log('Hello'), 3000);

// Clear intervals after 6 sec with the timer id 
setTimeout(() => { clearInterval(timerId); console.log('Bye'); }, 6000);