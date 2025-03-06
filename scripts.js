//FUNCIÓN ANÓNIMA QUE SE EJECUTA CUANDO LA VENTANA ACABA DE CARGAR
window.onload = function(){
    alert("Hola, soy una ventanita de Javascript!!!");

    let botonito = document.getElementById("btnPrueba");
    
    botonito.addEventListener("click", function(){
        alert("Antes de nada, la clase del botoncito es: " + botonito.className);
        let nuevaclase = (botonito.className="clase1") ? "clase2" : "clase1";
        alert("La nueva clase que se va a usar es: " + nuevaclase);
        botonito.className=nuevaclase;
        nuevaclase=null;
        alert("Ahora la clase del botoncito es: " + botonito.className);
    });
}