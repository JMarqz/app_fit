$(document).bind("mobileinit", function() {
	//Código de inicio de JQM
	
	//CARACTERÍSTICAS GLOBALES DE JQM
	//Definir que ningún link utilice AJAX
	$.mobile.ajaxEnabled = true;		
	//Se modifica el texto de LOADING
	$.mobile.loadingMessage = "Cargando...";
	//Se modifica el texto de LOADING
	$.mobile.pageLoadErrorMessage= "Error al cargar la página";
	
});