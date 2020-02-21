function validateCardNumber() {
    
    var x = document.getElementById("cardNumber").value;
    if(x.length !=16) {
        document.getElementById("cardNum").innerHTML = "Please Enter 16 digit number";
    } 
    else {
        document.getElementById("cardNum").innerHTML = "";   
    }
  }

  function validateMobileNumber() {
    
    var x = document.getElementById("Telephone").value;
    if(x.length !=10) {
        document.getElementById("mobileNumber").innerHTML = "Please Enter 10 digit number";
    } 
    else {
        document.getElementById("mobileNumber").innerHTML = "";   
    }
   
  }

  function ValidateEmail() {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById("Email").value;
    if(!email.match(pattern)) {
        document.getElementById("mailId").innerHTML = "Please Enter valid MailId";
    }
    else {
        document.getElementById("mailId").innerHTML = "";
    }
    }
    
    function validateSecurityCode() {
    
        var securityCode = document.getElementById("passwordId").value;
        if(securityCode.length != 4 ) {
            document.getElementById("passwordComment").innerHTML = "Please Enter Valid Security Code";
        } 
        else {
            document.getElementById("passwordComment").innerHTML = "";   
        }
      }
    
      function validatePostCode() {
    
        var PostCode = document.getElementById("Postcode").value;
        if(PostCode.length != 6 ) {
            document.getElementById("PostCodeComment").innerHTML = "Please Enter Valid 6 digit PostCode";
        } 
        else {
            document.getElementById("PostCodeComment").innerHTML = "";   
        }
      }
        
      function validateFax() {
    
        var PostCode = document.getElementById("FaxId").value;
        if(PostCode.length != 10 ) {
            document.getElementById("FaxComment").innerHTML = "Please Enter Valid 10 digit Fax Number";
        } 
        else {
            document.getElementById("FaxComment").innerHTML = "";   
        }
      }
      function validateNullField() {
        
      }