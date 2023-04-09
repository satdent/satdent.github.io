// JavaScript for BI Request Form

$(document).ready(function() {
    $("a").click(function(event) {
         if (window.event) {
            window.event.returnValue = false;
        }
        event.preventDefault();
    });
});

function sendData() {
    
    var contact = $("#primary_contact").val();
    
    var date = $("#date_needed").val();
    var name = $("#report_name").val();
    var address = $("#report_address").val();
    var cp = $("#report_cp").val();
    var telefono = $("#report_telefono").val();
    var email = $("#report_email").val();
    var marca = $("#report_marca").val();
    var modelo = $("#report_modelo").val();
    var serie = $("#report_serie").val();
    var comentarios = $("#comentarios").val();

    // validate form elements
    validate(contact,  date, name,address, cp, telefono, email, marca, modelo, serie,comentarios, );
    
}

function sendSubmission(contact,  sDate, name,address, cp, telefono, email, marca, modelo, serie,comentarios, message) {
    $(".toastr-success").slideDown();
     
}

function validate(contact, date, name, cp, address, telefono, email,marca, modelo, serie,comentarios) {
    console.log(date);
    // convert date to same format across browsers
    var cDate = moment(date).format("MM/DD/YYYY");
    console.log(cDate);
    // check if date is valid format
    var validDate = moment(cDate, "MM/DD/YYYY", true).isValid();
    var message = "";
    
    if (contact == "") {
         message = "Por favor, incluye un nombre de contacto";
         showFailure(message);
    
    } else if (date == "") {
         message = "Por favor, incluye una fecha (MM/DD/YYYY).";
         showFailure(message);
    } else if (  validDate == false ) {
         message = "Por favor, incluye una fecha en formato MM/DD/YYYY."
         showFailure(message);
    } else if (name == "") {
         message = "Por favor incluye el nombre de la empresa.";
         showFailure(message);
    } 
 else if (cp == "") {
         message = "Por favor incluye el código postal.";
         showFailure(message);
    }
 else if (address == "") {
         message = "Por favor incluye la dirección.";
         showFailure(message);
    }
 else if (telefono == "") {
         message = "Por favor incluye el teléfono.";
         showFailure(message);
    } 
 else if (email == "") {
         message = "Por favor incluye el email";
         showFailure(message);
    } 
 else if (marca == "") {
         message = "Por favor incluye la marca.";
         showFailure(message);
    } 
 else if (modelo == "") {
         message = "Por favor incluye el modelo.";
         showFailure(message);
    } 
  else if (serie == "") {
         message = "Por favor incluye el número de serie.";
         showFailure(message);
    } 
 else if (comentarios == "") {
         message = "Por favor incluye comentarios.";
         showFailure(message);
    } else {
         if ( $(".toastr-failure").css("display") == "block" ) {
              $(".toastr-failure").hide();
         }

         // convert date for SharePoint task list
         var sDate = new Date(cDate).toISOString();
         
         sendSubmission(contact,sDate,name,address, cp, telefono, email, marca, modelo, serie,comentarios);
    }
}

function showFailure(message) {
    if ( $(".toastr-failure").css("display") == "block" ) {
         $(".toastr-failure").hide();
    }
    $(".toastr-failure").html(message);
    $(".toastr-failure").slideDown().delay(3000).slideUp();
}

// if on SharePoint, this would reload to the home BI page
function loadPage() {
    window.location.href = "http://bihome.com";
}