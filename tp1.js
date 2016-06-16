			do{
				var operador  = prompt("Que desea hacer?");
			}while(operador != "suma" && operador != "resta" && operador != "division" && operador != "multiplicacion");

			do{
				var valor1 = prompt("Ingrese valor 1");
			} while(isNaN(valor1));

			do{
				var valor2 = prompt("Ingrese valor 2");
			} while(isNaN(valor2));

			calcular(operador, parseFloat(valor1), parseFloat(valor2));

			function calcular(op, v1, v2){
				switch(op){
					case "suma":
						alert((v1+v2).toFixed(2));
						break;
					case "resta":
						alert((v1-v2).toFixed(2));
						break;
					case "division":
						alert((v1/v2).toFixed(2));
						break;
					case "multiplicacion":
						alert((v1*v2).toFixed(2));
						break;
				}
			};