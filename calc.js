let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue ='';
for(item of buttons){
    item.addEventListener('click' , (e)=>{
        // target is getting us the place and innerText is giving us the value of that place. all these are stored in buttonText
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

        if(buttonText=='X'){
            buttonText='*';
            screenValue += buttonText;
            screen.value  = screenValue;
        }
        else if(buttonText == "C"){
            screenValue = '';
            screen.value  = screenValue;
            
        }
        else if(buttonText == "="){
            screen.value = eval(screenValue);
        }
        else if(buttonText == "B"){
            let number = screen.value;
            let len = number.length -1;
            // here 0 is the start position and len is the end position and substring is the new string u will be showing.
            let newNumber = number.substring(0,len);
            screenValue = newNumber;
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value=screenValue;
        }

    });
}
