let panel1 = document.getElementById("panel-1")
let panel2 = document.getElementById("panel-2")
let panel3 = document.getElementById("panel-3")
let panel4 = document.getElementById("panel-4")
let panel5 = document.getElementById("panel-5")

function resetActivePanel(){
    panel1.classList.remove('active')
    panel2.classList.remove('active')
    panel3.classList.remove('active')
    panel4.classList.remove('active')
    panel5.classList.remove('active')
}

function selectPanel(panelId){

    resetActivePanel(panelId)
    document.getElementById(panelId).classList.add('active')
}
/*
function selectPanel(panelNo){
    
    resetActivePanel()
    
    switch(panelNo){

        case 1:
            panel1.classList.add('active')
            break;
        case 2:
            panel2.classList.add('active')
            break;
        case 3:
            panel3.classList.add('active')
            break;
        case 4:
            panel4.classList.add('active')
            break;
        case 5:
            panel5.classList.add('active')
            break;
    }
}
*/













/*function selectPanel1(){
    panel1.classList.add('active')
}
function selectPanel2(){
    panel2.classList.add('active')
}*/

/*
switch(variable){
    case 1:{  ...break;}
    case 2:{  ...break;}
    case 3:{  ...break;}
    case 4:{  ...break;}
    default:{  ...break;}
    
}*/


/* 
#Adding and removing classes
<div id = "xyz" class = "class-1"> </div>

document.getElementById("xyz").classList.add(class-2)  // for id xyz, now class-2 is added ( class= "class-1 class-2")
document.getElementById("xyz").classList.remove(class-1)  // for id xyz, now class-1 is remove ( class= " class-2")


panel1.classList.add('ccc')
panel1.classList.add('ccc')
panel1.classList.add('cccjhkhjk')
console.log(panel1.classList)

*/