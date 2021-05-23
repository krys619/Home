
//chargement page
$(function(){
    $("aside>section:nth-of-type(2)>form>button").on("click",verifEmail);

 
})

/**
 * verifier email newslettre
 */
function verifEmail(event){
    // On empêche la balise de fonctionner "normalement"
     event.preventDefault();
    
     let email = $("[name='emailNewsletter']"); 
     
     if( email.val().length > 5){
         email.next().hide("slow");
     }
     else{
         email.next().hide("slow");
         email.next().show("fast");
     }
 
 }