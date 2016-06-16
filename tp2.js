
	do{
		var valor = prompt("ingrese un nro.");
	}while(isNaN(valor));
	
	console.log(esPrimo(valor));	
	
	function esPrimo(valor){
		for(var i=2; i<valor;i++){
			if(valor%i==0)
				return false;
		}
			return true;
	}

	////////////

	do{
		var valor1 = prompt("ingrese el rango inicial.");
	}while(isNaN(valor1));

	do{
		var valor2 = prompt("ingrese el rango final.");
	}while(isNaN(valor2));

	mostrarPrimos(valor1, valor2);

	function mostrarPrimos(valor1, valor2){
		for(var i=valor1; i<=valor2; i++)
			if(esPrimo(i))
				console.log(i);
	}

