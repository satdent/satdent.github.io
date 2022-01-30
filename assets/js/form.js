
 function addpiece()
 {
	 var marca=$('#input_marca').val();
	 var modelo=$('#input_modelo').val();
	 var nserie=$('#input_nserie').val();
	 var comentario=$('#input_comment').val();
	 var phone=$('#input_phone').val();
	 var email=$('#input_email').val();
	 var dataPiece= {
		 "marca" : marca,
		 "modelo" : modelo,
		 "nserie" : nserie,
		 "comentario" : comentario,
		 "phone" : phone,
		 "email" : email
	 }
		 
	 //alert('marca='+ marca + '&modelo='+ modelo + '&nserie='+ nserie + '&comentario='+ comentario + '&phone='+ phone + '&email='+ email);
	 $.ajax({
		 type:"post",
		 url: "material.php",
		 data:dataPiece,
		 cache:false,
		 beforeSend: function(){
			 $('#msgmat').html("Añadiendo material, espere por favor...");
		 },
		 success: function(html){
			 $('#msgmat').html(html);
		 },
		error: function (request, status, error) {
			alert(request.responseText);
		}
	 });
	 $('#input_marca').val('');
	 $('#input_modelo').val('');
	 $('#input_nserie').val('');
	 $('#input_comment').val('');
	 return false;
	 
 }
  function send()
 {
	 var empresa = $('#input_empresa').val();
	 var dir=$('#input_direccion').val();
	 var cp=$('#input_cp').val();
	 var city=$('#input_poblacion').val();
	 var phone=$('#input_phone').val();
	 var email=$('#input_email').val();
	 var marca=$('#input_marca').val();
	 var modelo=$('#input_modelo').val();
	 var nserie=$('#input_nserie').val();
	 var comentario=$('#input_comment').val();
	 //var dataMail= 'empresa='+ empresa + '&dir=' + dir + '&cp='+ cp + '&city=' + city + '&phone='+ phone + '&email='+ email + '&marca='+ marca + '&modelo='+ modelo + '&nserie='+ nserie + '&comentario='+ comentario;
	 var dataMail= {
		 "empresa" : empresa,
		 "dir" : dir,
		 "cp" : cp,
		 "city" : city,
		 "marca" : marca,
		 "modelo" : modelo,
		 "nserie" : nserie,
		 "comentario" : comentario,
		 "phone" : phone,
		 "email" : email
	 }
	 $.ajax({
		 type:"post",
		 url: "email.php",
		 data:dataMail,
		 cache:false,
		 // beforeSend: function(){
			 // $('#msgsend').html("Su solicitud esta siendo enviada, espere por favor...");
		 // },
		 success: function(html){
			 $('#msgsend').html(html);
		 }
	 });
	 $('#input_empresa').val('');
	 $('#input_direccion').val('');
	 $('#input_cp').val('');
	 $('#input_poblacion').val('');
	 $('#input_phone').val('');
	 $('#input_email').val('');
	 $('#input_marca').val('');
	 $('#input_modelo').val('');
	 $('#input_nserie').val('');
	 $('#input_comment').val('');
	 return false;
	 
 }
