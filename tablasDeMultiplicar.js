//asignamos el formlario a la constante form
const form=document.tablas;
//buscamos el id del div donde mostraremos el resultado y lo asignamos a la constante div
const div =document.querySelector("#result");
//buscamos el id del botón en el dom y lo asignamos a la constante boton
const boton=document.querySelector("#boton");
//buscamos el id del botón 2 en el dom y lo asignamos a la constante boton1
const boton1=document.querySelector("#boton1");
//escuchamos al botón y le asignamos un evento click para ejecutar una función anónima
boton.addEventListener("click", function(){
//Validamos el dato ingresado en el formulario
if(form.n1.validity.valid){
//inpedimos que se refresqué la página
event.preventDefault();
//llamamos a la función que realizará la multiplicación
tablas(form);
}
//en caso de haber errores en el formlario mandamos mensaje de error
else{
    parrafo.textContent="¡solo se deben ingresar números positivos!"
}
//inicializamos la función tablas
function tablas(form){
//creamos un siclo for para iterar hasta el número 10
for(var i = 1; i<11; i++){
var dato =parseInt(form.n1.value);
//creamos un elemento párrafo en el dom
const parrafo=document.createElement("p");
//agregamos texto al párrafo
parrafo.textContent=`multiplicar ${dato }por ${i} es igual a ${dato*i}`;
//insertamos el párrafo con su texto en el div
div.appendChild(parrafo);
}
}
}
);
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