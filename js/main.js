
var botonAgregar = document.getElementById("botonAgregar");
	botonAgregar.addEventListener("click", anadirLista);

function anadirLista(e){

	// variable que llama al id contenedor
	var contenedor = document.getElementById("contenedor");
	// variable que llama a cajaLista
	var cajaLista = document.getElementById("cajaLista");
	// div creado para contener el input y el boton
	var divList = document.createElement("div");
	// input nuevo
	var cuadroTexto = document.createElement("input");
	// estilo agregado al input y atributos
	cuadroTexto.classList.add("form-control");
	cuadroTexto.setAttribute("placeholder","Añadir una lista");
	// boton de agregar, ldespues el estilo y texto dentro del boton
	var botonAgregar = document.createElement("button");
		botonAgregar.classList.add("btn","btn-success");
		botonTexto = document.createTextNode("Guardar");
	// agregar texto al boton
	botonAgregar.appendChild(botonTexto);
	// agregar la clase al boton
	botonAgregar.classList.add("btn");
	// agregar div al contenedor
	contenedor.appendChild(divList);
	// agregar input al div
	divList.appendChild(cuadroTexto);
	// agregar al div el botonAgregar
	divList.appendChild(botonAgregar);
	// quitar el boton agregar 
	// 	cajaLista.removeChild(botonAgregar);
	// funcion para agregar una tarjeta apretando el boton Guardar
	botonAgregar.addEventListener("click", anadirTarjeta);

 	function anadirTarjeta(e){ //funcion para añadir tarjeta
		contenedor.removeChild(divList);
		// div creado para contener el textArea y el boton
		var divNuevaTarjeta = document.createElement("div");
		var tituloTarjeta = document.createElement("h4");
		divNuevaTarjeta.classList.add("divNuevaTarjeta");
		tituloTarjeta.innerHTML = cuadroTexto.value;
		divNuevaTarjeta.appendChild(tituloTarjeta);
		cuadroTexto.value = "";
		contenedor.appendChild(divNuevaTarjeta);
		var input2 = document.createElement("textarea");
			input2.classList.add("form-control");
		input2.setAttribute("placeholder","Añade una tarea");
		var botonAnEt = document.createElement("button");
			botonAnEt.classList.add("btn","btn-success");
			botonAnEtTexto = document.createTextNode("Añadir");
		botonAnEt.appendChild(botonAnEtTexto);
		divNuevaTarjeta.appendChild(input2);
		divNuevaTarjeta.appendChild(botonAnEt);
	}

	botonAnEt.addEventListener("click", anadirTarea);

	function anadirTarea(e){
		var tareas = document.createElement("button");
			tareas.classList.add("btn-lg", "btn-block")
		input2.innerHTML = cuadroTexto.value;
	}

}

	// if ( agregar == 0 ){

	// 	alert("ingresa un texto");
	// 	console.log("no agrego texto");
	// 	return false;
	// }else{

// 		var listaUl = document.getElementById("listaUl");
// 		var lista = document.createElement("li");
// 		lista.classList.add("bg-primary");
// 		var check = document.createElement("input");
// 		check.setAttribute("type","checkbox");
// 		var spanTrash = document.createElement("span");
// 		spanTrash.classList.add("fa","fa-trash");
// 		lista.appendChild(check);
// 		lista.appendChild(textoArea);
// 		lista.appendChild(spanTrash);
// 		listaUl.appendChild(lista);

// 		spanTrash.onclick = function (){
// 		listaUl.removeChild(lista);
// 		};
// 		check.onclick = function(){
// 			listaUl.classList.toggle("delineado");
		
// 	document.getElementById("textoArea").value = "";

// 	}

// };




