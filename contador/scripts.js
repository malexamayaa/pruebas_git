window.onload = function(){
    let preguntas = 0; 
    let aciertos = 0;
    let errores = 0;

    let parPreguntas = document.getElementById("parNumPreg");
    let parAciertos = document.getElementById("parAciertos");
    let parErrores = document.getElementById("parErrores");
    let btnAciertos = document.getElementById("btnAcierto");
    let btnErrores = document.getElementById("btnError");

    parPreguntas.innerHTML += preguntas;
    parAciertos.innerHTML += aciertos;
    
    btnAciertos.addEventListener("click", function(){
        aciertos++;
        parAciertos.innerHTML = "Aciertos: " + aciertos;
        preguntas++;
        parPreguntas.innerHTML = "Número de Preguntas: " + preguntas;
    });

    btnErrores.addEventListener("click", function(){
        errores++;
        parErrores.innerHTML = "Errores: " + errores;
        preguntas++;
        parPreguntas.innerHTML = "Número de Preguntas: " + preguntas;
    });
}