/* Variables */

var $numberList = document.getElementById('number-list');
var $numbers = document.getElementById('numbers');
var $btnOrder = document.getElementById('btn-order');
var numberList = [];

/*Permitir solo numero y espacios*/
$numbers.addEventListener('keypress', onlyNumbers);

function onlyNumbers(event){
	if( event.keyCode == 32 ||(event.keyCode > 47 && event.keyCode < 58) )
	{
		clickBotton();
	}
	else{
		event.preventDefault();
	}
}
/*Permitir solo numero y espacios*/



/* obtener el click del boton */
function clickBotton(){
	$btnOrder.addEventListener('click', function(e) {
		var groupNumbers = $numbers.value.trim();
		var numbers = groupNumbers.split(' ');

		/* ordenando los valores ascendentemente */
		var numberAsc = numbers.sort(function(a, b){return a-b});
		/* ordenando los valores ascendentemente */

		/*revisar si es que hay un valor repetido y retirarlo*/
		var unique = numberAsc.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
		/*revisar si es que hay un valor repetido y retirarlo*/


		$numberList.innerHTML = '';

		for( var i = 0; i < unique.length; i++ ) {

			var current = unique[i];

			var elt = document.createElement('span');
			elt.appendChild(document.createTextNode(current));

			$numberList.appendChild(elt);
		}
	});
}
/* obtener el click del boton */
