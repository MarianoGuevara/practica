/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;	
	nombreIngresado = document.getElementById("txtIdNombre").value;	
/*El valor de la variable nombreIngresado es lo que el usuario ponga en el Id del html (txtIdNombre) 
y con document.getElementById("").value javascript la interpreta. 
*/
	alert(nombreIngresado); //se muestra el valor variable por alert

}


