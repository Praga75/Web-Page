//************************OnChange Events *************/   
//Card Number
function validateCardNumber() {
    var number = document.getElementById("cardNumber").value;
    if(number.length !=16) {
        cardNum.innerHTML = "Please Enter 16 digit number";
    } 
    else {
        cardNum.innerHTML = "";   
    }
  }
//Card Holder Name
function validateHolderName() {
    
    var pattern = /^[A-Za-z]+$/;
    var name = document.getElementById("holderName").value;
    if(!name.match(pattern)) {
        HolderComment.innerHTML = "Please Enter Valid Name";
    } 
    else {
        HolderComment.innerHTML = "";   
    }
  }
//Mobile Number
  function validateMobileNumber() {
    
    var mobileNo = document.getElementById("Telephone").value;
    if(mobileNo.length !=10) {
        mobileNumber.innerHTML = "Please Enter 10 digit number";
    } 
    else {
        mobileNumber.innerHTML = "";   
    }
   
  }
// Email Id
  function ValidateEmail() {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById("Email").value;
    if(!email.match(pattern)) {
        mailId.innerHTML = "Please Enter valid MailId";
    }
    else {                     
        mailId.innerHTML = "";
    }
    }
//Security Code  
    function validateSecurityCode() {
        var pattern = /^[0-9]+$/;
        var securityCode = document.getElementById("passwordId").value;
        
        if(securityCode.length != 4 || !securityCode.match(pattern) ) {
            passwordComment.innerHTML = "Please Enter Valid Security Code";
        } 
        else {
            passwordComment.innerHTML = "";   
        }
      }
    //Post Code
      function validatePostCode() {
    
        var PostCode = document.getElementById("Postcode").value;
        if(PostCode.length != 6 ) {
            PostCodeComment.innerHTML = "Please Enter Valid 6 digit PostCode";
        } 
        else {
            PostCodeComment.innerHTML = "";   
        }
      }

    //Fax
      function validateFax() {
    
        var Fax = document.getElementById("FaxId").value;
        if(Fax.length != 10 ) {
            FaxComment.innerHTML = "Please Enter Valid 10 digit Fax Number";
        } 
        else {
            FaxComment.innerHTML = "";   
        }
      }

//***********OnClick Event to check Null Fields******************
   function validateNullField() {
    var comment = "Field Cannot be Empty";
   
    //CardNumber
    if( cardNumber.value == "") 
        cardNum.innerHTML = comment;           
    
    //Security Code
    if( passwordId.value == "" ) 
        passwordComment.innerHTML = comment;        
         //Card Holder Name
    if(holderName.value == "") 
        HolderComment.innerHTML = comment;           
     
    //Email Id
    if(Email.value == "") 
        mailId.innerHTML = comment;           
     
    //Postal Code
    if(Postcode.value == "") 
        PostCodeComment.innerHTML = comment;
    
    //Address Field
    if(Addr1.value == "") 
    AddressComment.innerHTML = comment;
    
    //Town /City
    if(townId.value == "") 
        townComment.innerHTML = comment;
   
   }