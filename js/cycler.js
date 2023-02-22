function changePlotImg(){
   let optionValue = this.options[this.selectedIndex].value
   
   if (optionValue == 'default'){
       return optionValue = ''
   }
   else{
       return document.getElementById("image").src = optionValue + "_scatterplot.png";
   }
}

document.getElementById("scatter-select").onchange = changePlotImg;

function changeGraphImg(){
   let optionValue = this.options[this.selectedIndex].value
   
   if (optionValue == 'default'){
       return optionValue = ''
   }
   else{
       return document.getElementById("graphs").src = "barh_" + optionValue + ".png";
   }
}

document.getElementById("barh-select").onchange = changeGraphImg;