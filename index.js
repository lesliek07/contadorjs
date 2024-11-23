precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


 
let sum1 = document.querySelector('#btn1');
let rest1 = document.querySelector('#btn2');
let cant = document.querySelector('.cantidad');
let total = document.querySelector('.valor-total');
let cont = 0;



sum1.addEventListener('click', ()=>{

   cont++;
    cant.innerHTML = cont; 
    total.innerHTML = cont*precio;
    
  

});

rest1.addEventListener('click', ()=>{

    cont--;
   
    if(cont < 0){
        cont = 0;
        cant.innerHTML = cont;
    }else{
        cant.innerHTML = cont;
        total.innerHTML = cont*precio;
    }

});