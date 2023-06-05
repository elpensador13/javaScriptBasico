//asignamos el formlario con el nombre suma a la constante form
const form=document.suma;
//buscamos en el dom el id del botón 
const boton=document.querySelector("#boton");
//escuchamos al botón y le asignamos un evento click para ejecutar una función anónima
boton.addEventListener("click", function(){
//Buscamos la etiqueta p y la guardamos en la constante parrafo
const parrafo= document.querySelector("#result");
//si los datos son válidos continuamos con la suma
if(form.n1.validity.valid&&form.n2.validity.valid&&form.n3.validity.valid&&form.n4.validity.valid&&form.n5.validity.valid){
//inpedimos que se refresqué la página
event.preventDefault();
//Llamamos a la función sumar
suma(form);
}
//en caso de haber errores en el formlario mandamos mensaje de error
else{
    parrafo.textContent="¡solo se deben ingresar números positivos!"
}
})
//inicializamos nuestra función suma
function suma(form){
    //inicialisamos una variable donde guardaremos el resultado
    const result=parseFloat(form.n1.value) + parseFloat(form.n2.value) + parseFloat(form.n3.value) + parseFloat(form.n4.value) + parseFloat(form.n5.value);
    //buscamos etiqueta p y guardamos en la variable parrafo
    var parrafo =document.querySelector("#result");
    //hacemos una cadena de texto para mostrar los números ingresados y la suma de esos números cuanto da
    parrafo.textContent = `La suma de ${form.n1.value} más ${form.n2.value} más ${form.n3.value} más ${form.n4.value} más ${form.n5.value} es igual a ${result}`;
  }
  