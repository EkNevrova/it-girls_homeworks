
function applyDiscount() {
              
  let calc = document.getElementById('sum');
  let sum = Number(calc.value) - Number(calc.value)*0.2;
  calc.setAttribute('value', sum);

  let goods = document.querySelectorAll('.card-footer');  
  let activeArticle;
  let newPrice = 0;

  for (let ind = 0; ind < 4; ind+=1) {         
    activeArticle = Number(goods[ind].value); 
    newPrice = activeArticle - activeArticle*0.2; 
    goods[ind].setAttribute('value', newPrice);
    if (ind == 3) {
     let btn = document.querySelector('.btn');
     btn.setAttribute('disabled', true);
    }
   }
}


// задание со звёзочкой
 function functionToExecute() {
    let number1 = document.getElementById("number1").value;
    let result = document.getElementById("result");
    result.value=number1**2;
  }    

