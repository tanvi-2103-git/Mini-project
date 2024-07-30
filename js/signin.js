$("#firstname").on('blur',()=>validate1())

const validate1 = function () {
    $("#error2").text("")
const firstname = $("#firstname").val();  
console.log(firstname);  
if(firstname==""){
    $("#error1").text("first name is required");
    return false;
}
else if(!firstname.match("^[A-Za-z ]*$")){
    $("#error1").text("please enter valid firstName");
    return false
}
else{
    return true;
}
}

$("#lastname").on("blur",()=>validate2())
const validate2 = function () {
const lastname = $("#lastname").val(); 
console.log(lastname);  
if(lastname==""){
    $("#error2").text("last name is required");      
}
else if(lastname.length>10){
    $("#error2").text("please enter valid last name");
} 
else{
    return true;
}
}
$("#age").on("blur",()=>validate3())
const validate3 = function () {
const agenode = $("#age").val(); 
console.log(agenode);  
if(agenode==""){
    $("#error3").text("age is required"); 
    return false;}
else if(agenode<12 || agenode>40){
    $("#error3").text("please enter valid age");
    return  false;
} 
else{
    return true;
}
}
$("#mail").on("blur",()=>validate4())
const emailPattern = "^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
       const emailRegExp = new RegExp(emailPattern);
const validate4 = function () {
    const mailValue = $("#mail").val(); 
    console.log(mailValue);

    if (mailValue === "") {
        $("#error4").text("Email ID is required"); 
        return false;
    } else if (!emailRegExp.test(mailValue)) {
        $("#error4").text("Please enter a valid email");
        return false;
    } else {
        $("#error4").text(""); 
        return true;
    }
}
$("#pass").on("blur",()=>validate5())
const passPattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,12}$";
const regExp=new RegExp(passPattern);
const validate5 = function () {
const passnode = $("#pass").val();
console.log(passnode);    
if(passnode==""){
    $("#error5").text("password is required"); 
    return false;}
else if(!regExp.test(passnode)){
    $("#error5").text("please enter valid password");
    return false;}
else{
    return true;
}    
}
$("#confirmPass").on("blur",()=>validate6())
const validate6 = function () {
    if($("#confirmPass").val()!=$("#pass").val())
        $("#error6").text("password mismatch"); 
    else if($("#confirmPass").val()=="")
        $("#error6").text("password is required"); 
}



$("#registerForm").submit(()=>validateAll())

function vaidateAll(){
    return validate1() && validate2() && validate3() && validate4() && validate5();
}
