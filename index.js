let display=(document.getElementById('display'))


function toDisplay(value) {
    display.value += value;
    console.log(display.value);
}

function toReset(value) {
    display.value =" ";
}



function toCal(){
    if(!display.value){
        alert('please enter the value')
    }
  
    else {
        let calc=eval(display.value)
    display.value=calc
    console.log(calc)
    
   
    }
   

}


