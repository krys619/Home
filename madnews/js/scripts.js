
//variables globale
let compteur = 0;


let articletop = [ "<div class='col-sm-5 m-auto'><a href='#'><img  src='img/index-img05.jpg' ></a></div><div class='col-sm-6'><a href='#'><h1>Mon top titre 1</h1></a><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores recusandae accusamus sit praesentium maiores modi soluta exercitationem reprehenderit amet asperiores unde, atque quas magnam quis dicta minima quia fuga in?Distinctio ab voluptas asperiores test1 quidem mollitia, dolores, nihil corrupti, aut explicabo omnis iure! Voluptatibus labore sed suscipit excepturi, dignissimos amet libero esse facilis vitae ut deleniti molestiae similique repudiandae. 1</p><a class='btn btn-lg' href='#'>Voir plus</a></div>",
"<div class='col-sm-5 m-auto'><a href='#'><img  src='img/index-img06.jpg' ></a></div><div class='col-sm-6'><a href='#'><h1>Mon top titre 2</h1></a><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores recusandae accusamus sit praesentium maiores modi soluta exercitationem reprehenderit amet asperiores unde, test2 quas magnam quis dicta minima quia fuga in?Distinctio ab voluptas asperiores pariatur quidem mollitia, dolores, nihil corrupti, aut explicabo omnis iure! Voluptatibus labore sed suscipit excepturi, dignissimos amet libero esse facilis vitae ut deleniti molestiae similique repudiandae. 2</p><a class='btn btn-lg' href='#'>Voir plus</a></div>",
"<div class='col-sm-5 m-auto'><a href='#'><img  src='img/index-img07.jpg' ></a></div><div class='col-sm-6'><a href='#'><h1>Mon top titre 3</h1></a><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores recusandae accusamus sit praesentium maiores modi soluta exercitationem reprehenderit amet asperiores unde, atque quas magnam quis dicta minima quia fuga in?Distinctio ab voluptas asperiores pariatur quidem mollitia, dolores, test3 corrupti, aut explicabo omnis iure! Voluptatibus labore sed suscipit excepturi, dignissimos amet libero esse facilis vitae ut deleniti molestiae similique repudiandae. 3</p><a class='btn btn-lg' href='#'>Voir plus</a></div>"

]
//chargement page
$(function(){

    //newsletter
    $("aside>section:nth-of-type(2)>form>button").on("click",verifEmail);

    //contact
     $("section:first-of-type>form>button").on("click",validerContact);
    //diapo
    $(".la-chevron-left").on("click",reculeArticle);
    $(".la-chevron-right").on("click",avanceArticle);
    $("main > section:first-of-type > div > div > div:last-of-type").empty();
    for(art=0;art<articletop.length;art++)
    {
        let baliseI =  "<i class='las la-circle'></i>";
        if(art==0)
        {
            baliseI =  "<i class='las la-dot-circle'></i>";
        }
        $("main > section:first-of-type > div > div > div:last-of-type").append(baliseI);
    }
    //fin diapo
 
})

/**
 * fait reculer article dans le bandeau
 */
function reculeArticle(){
    let balisesI = $("main > section:first-of-type > div > div > div:last-of-type i");
    $(balisesI[compteur]).removeClass("la-dot-circle").addClass("la-circle");
    compteur--;
    if(compteur < 0)
    {
        compteur = articletop.length-1;
    }
    //enleve article
    $("main > section:first-of-type > div > div > div:first-of-type,main > section:first-of-type > div > div >div:nth-of-type(2)").remove();
    //change article
    $("main > section:first-of-type > div > div > i:first-of-type").before(articletop[compteur]);
    $(balisesI[compteur]).removeClass("la-circle").addClass("la-dot-circle");
   
}
/**
 * fait avancer article dans le bandeau
 */
function avanceArticle(){
    let balisesI = $("main > section:first-of-type > div > div > div:last-of-type i");
    $(balisesI[compteur]).removeClass("la-dot-circle").addClass("la-circle");
    compteur++;
    if(compteur==articletop.length)
    {
        compteur=0;
    }
     //enleve article
     $("main > section:first-of-type > div > div > div:first-of-type,main > section:first-of-type > div > div >div:nth-of-type(2)").remove();
    //change article
    $("main > section:first-of-type > div > div > i:first-of-type").before(articletop[compteur]);

    $(balisesI[compteur]).removeClass("la-circle").addClass("la-dot-circle");

}
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

/**
 * gestion formulaire contact
 */
function validerContact(event){
   
    // On empêche la balise de fonctionner "normalement"
     event.preventDefault();
    
    console.log("click");
 }