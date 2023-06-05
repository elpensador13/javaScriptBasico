//asignamos el formlario a la constante form
const form=document.triangulos;
//buscamos el id del div donde mostraremos el resultado y lo asignamos a la constante div
const div =document.querySelector("#result");
//buscamos el id del botón en el dom y lo asignamos a la constante boton
const boton=document.querySelector("#boton");
//buscamos el id del botón 2 en el dom y lo asignamos a la constante boton1
const boton1=document.querySelector("#boton1");
//escuchamos al botón y le asignamos un evento click para ejecutar una función anónima
boton.addEventListener("click", function(){
//Validamos los datos ingresados
if(form.l1.validity.valid&&form.l2.validity.valid&&form.l3.validity.valid){
    //inpedimos que se refresqué la página
    event.preventDefault();
//llamamos a la función que hará la comparación
    comparacion();
}
    else{
    //ponemos una alerta para notificar al usuario que no ingreso los datos correctos y la guardamos en la constante alert
    const alert =document.createElement("p"); 
    alert.textContent="¡Por favor ingresa solo datos númericos!";
div.appendChild(alert);
}
});
    function comparacion(){
        //mediante un if comparamos los valores y determinamos tipo de triángulo
        if(parseFloat(form.l1.value)===parseFloat(form.l2.value)&&parseFloat(form.l2.value)===parseFloat(form.l3.value)){
//creamos un elemento párrafo en el dom
const parrafo=document.createElement("p");
//agregamos texto al párrafo
parrafo.textContent="De acuerdo con los valores ingresados, el triángulo es equilátero.";
//insertamos el párrafo con su texto en el div
div.appendChild(parrafo);
}
else if(parseFloat(form.l1.value)!==parseFloat(form.l2.value)&&parseFloat(form.l2.value)!==parseFloat(form.l3.value)){
//creamos un elemento párrafo en el dom
const parrafo1=document.createElement("p");
//agregamos texto al párrafo
parrafo1.textContent="De acuerdo con los valores ingresados, el triángulo es escaleno.";
//insertamos el párrafo con su texto en el div
div.appendChild(parrafo1);
}    
else{
//creamos un elemento párrafo en el dom
const parrafo2=document.createElement("p");
//agregamos texto al párrafo
parrafo2.textContent="De acuerdo con los valores ingresados, el triángulo es isósceles.";
//insertamos el párrafo con su texto en el div
div.appendChild(parrafo2);
}
}

boton1.addEventListener("click", function reset(){
    form.reset();
//preguntamos si hay algún elemento div en el dom
const remover =document.querySelector("#result");
//hacemos una condicional para saber si hay algún div en el dom 
if(remover==null){

}
else{
    remover.remove();
}
}
);
