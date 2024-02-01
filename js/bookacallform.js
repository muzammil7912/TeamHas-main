
const emailValue= localStorage.getItem("write_email")

if(emailValue){
   
    let emailInput=document.querySelector("#sendconact input[name=email]")
    emailInput.value=emailValue
}