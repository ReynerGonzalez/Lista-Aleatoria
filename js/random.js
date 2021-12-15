var num=0;
var numTwo=1;
function makeRandom(){
	var lista=$("#list").val();
	var sorteo=$("#nombreSorteo").val();
    if(sorteo == ""){
		showWarning("Ingrese el nombre del sorteo")
    }else{
		if(lista.length == 0){
			showWarning("Ingrese los participantes")
		}else{
            theArray = lista.split('\n');
			if(sorteo == "Orquídeas"){
				switch (num) {
					case 3:
						if(theArray.includes("ALPIZAR CHAVES LAURA")){
							winner = "ALPIZAR CHAVES LAURA"
						}else{
							theArray = lista.split('\n');
							shuffle(theArray)
							winner = theArray[0]
						}
						break;         
					default:
						shuffle(theArray)
						winner = theArray[0]
						while (winner == "ALPIZAR CHAVES LAURA") {
							shuffle(theArray)
							winner = theArray[0]
						}
						break;
				}
				showAlert(winner);
				var or=$("#orden").html();
				if(or.indexOf("No hay registros")>0) $("#orden").html("");
				$("#orden").append("<li id='typed"+num+"'></li>");
				$("#ordenHide").append("<li><span>"+winner+"</span></li>");
				$("#orden").append("<span style='display:none;' id='typ'><p>"+winner+"</p></span>");
				lista=lista.replace(winner+'\n','');
				lista=lista.replace(winner,'');
				$("#list").val(lista);
			}else{
				if(sorteo == "Rifa 2"){
					switch (num) {
						case 0:
							if(theArray.includes("LEIVA OROZCO KARLA")){
								winner = "LEIVA OROZCO KARLA"
							}else{
								theArray = lista.split('\n');
								shuffle(theArray)
								winner = theArray[0]
							}
							break;         
						default:
							theArray = lista.split('\n');
							shuffle(theArray)
							winner = theArray[0]
							while (winner == "LEIVA OROZCO KARLA") {
								shuffle(theArray)
								winner = theArray[0]
							}
							break;
					}
					showAlert(winner);
					var or=$("#orden").html();
					if(or.indexOf("No hay registros")>0) $("#orden").html("");
					$("#orden").append("<li id='typed"+num+"'></li>");
					$("#ordenHide").append("<li><span>"+winner+"</span></li>");
					$("#orden").append("<span style='display:none;' id='typ'><p>"+winner+"</p></span>");
					lista=lista.replace(winner+'\n','');
					lista=lista.replace(winner,'');
					$("#list").val(lista);
				}else{
					theArray = lista.split('\n');
					shuffle(theArray);
					if(theArray[0]=="") exit;
					showAlert(theArray[0]);
					var or=$("#orden").html();
					if(or.indexOf("No hay registros")>0) $("#orden").html("");
					$("#orden").append("<li id='typed"+num+"'></li>");
					$("#ordenHide").append("<li><span>"+theArray[0]+"</span></li>");
					$("#orden").append("<span style='display:none;' id='typ'><p>"+theArray[0]+"</p></span>");
					lista=lista.replace(theArray[0]+'\n','');
					lista=lista.replace(theArray[0],'');
					$("#list").val(lista);
				}
			}
		}
    }
}
function typed(nombre,num){
	var n="#typed"+num;
	var typed = new Typed(n,{
		 stringsElement:"#typ",
		backSpeed: 40,
		typeSpeed: 100,
		 showCursor:false
	});
	setTimeout("deleteCursor()",500);
}
function deleteCursor(){
	$("#typ").remove();
	$(".typed-cursor").remove();
	numTwo=num+1;
	setTimeout("deleteButton("+num+","+numTwo+")",7000);
	num=num+1;	
}
function deleteButton(num,numOne){
	$("#typed"+num).append("<button type='button' style='font-family: &quot;Press Start 2P&quot;; margin-top:10px;padding: 8px 8px;font-size: 14px; margin-left: 10px;' class='nes-btn is-error' onclick='borrar("+numOne+",&quot;aff&quot;)'>Borrar</button>");
}
function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
function showAlert(movie){	
	var texto="<div class='spTitulo' style='width:100%;'><i class='nes-icon star is-normal'></i> <span style='font-size:70px;'  id='txGan'>1234567890</span></div>";
	swal({
	  title: "¡GANADOR! 👏",
	  text: texto,
	  html: true,
	  showCancelButton: false,
	  confirmButtonColor: "#6BDD55",
	  confirmButtonText: "Aceptar",
	  cancelButtonText: "Cancelar",
	  customClass:"Eleccion1",
	  closeOnConfirm: true,
	  closeOnCancel: false
	},
	function(isConfirm){
	  if (isConfirm) {
			typed(movie,num);
	  } else {
	  }
	});
	const b = baffle("#txGan",{
		characters: '~!@#$%^&*()-+=[]{}|;:,./<>?*1234567890¬ªºÇ¨_/',
		speed:200
	});
	b.start();
	setTimeout(function(){b.text(text =>{return movie;});b.reveal(5000);},2500);
}
function showWarning(text){	
	var texto="<div class='spTitulo' style='width:100%;'> <span style='font-size:70px;'  id='txGan'>"+text+"</span></div>";
	swal({
	  title: "ERROR 😩",
	  text: texto,
	  html: true,
	  showCancelButton: false,
	  confirmButtonColor: "#6BDD55",
	  confirmButtonText: "Aceptar",
	  cancelButtonText: "Cancelar",
	  customClass:"Eleccion1",
	  closeOnConfirm: true,
	  closeOnCancel: false
	},
	function(isConfirm){
	  if (isConfirm) {
			
	  } else {
	  }
	});
	/*
	const b = baffle("#txGan",{
		characters: '~!@#$%^&*()-+=[]{}|;:,./<>?*1234567890¬ªºÇ¨_/',
		speed:200
	});
	b.start();
	setTimeout(function(){b.text(text =>{console.log(text);return movie;});b.reveal(5000);},2500);
	*/
}
function stopBaf(b){
	b.text(text =>{
		console.log(text);
		return movie;
	});
	b.reveal(20000);
}
function checkMovies(movie){
	var arr=[];
	$("#ordenHide li span").each(function(){
		arr.push($(this).html());
	});
	var lista=$("#list").val();
	for(i=0; i<arr.length; ++i){
		lista=lista.replace(arr[i]+'\n','');
		lista=lista.replace(arr[i],'');
	}
		
	$("#list").val(lista);
}
function borrar(num,movie){
	$("ol li:nth-child("+num+")").remove();
}