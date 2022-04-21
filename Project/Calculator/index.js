var displayArea = document.getElementById('display')

function isOprator(buttonText){
    if(buttonText == '*' || buttonText == '/' || buttonText == '+' || buttonText == '-' || buttonText == '%' )
        return  true
    else
        return false
}


function buttonClicked( buttonText){
    if(displayArea.innerText === '0'){
        if(buttonText != '0' && buttonText != '00'){  // dont do anything if button click 0 or 00
            if(buttonText == '.' || isOprator(buttonText)){ //if  button clicked is . or any oprators, then show it a 0 folloed by button clicked (Eg. 0.5, 0 + 5)
                displayArea.innerText = displayArea.innerText + buttonText
            }else{
                displayArea.innerText = buttonText
            }
        }
    }else{
       if(isOprator(displayArea.innerText[displayArea.innerText.length - 1]) && isOprator(buttonText)){ // replace the operator

       } else{
            displayArea.innerText = displayArea.innerText + buttonText
        }
    }
}