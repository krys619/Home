
// window.onload = () => {
// //ajoute un ecouteur evenement scroll sur la fenetre
// document.addEventListener("scroll",defile)

// let bVoir = document.querySelector("body>.container>.row>div>div:last-of-type");
// bVoir.addEventListener("click",ajoutArticle)
// }

// function ajoutArticle(){
//     let row = document.querySelectorAll("body>.container>.row>div>.post-preview");
//     let div = document.querySelector("body>.container>.row>div");
//     console.log(row);
//     for(let r=0; r< row.length; r++)
//     { 
//         let baliseDiv = document.createElement("div");
//         baliseI.classList.add("post-preview");
//         div.appendChild("art");  
//     }
// }

// function defile(){
//     //window.scrollY : nombre de pixele entre haut du document et position actuelle du haut de la fenetre
//     //window.innerHeight : hauteur interieur de la fenetre
//     //document.documentElement.scrollHeight : la hauteur du document
//     console.log(document.documentElement.scrollHeight);
//     if(window.scrollY+window.innerHeight>= document.documentElement.scrollHeight)
//     {
//         console.log("je suis en bas");
//     }
   
// }

$(function(){

    $(document).on("scroll",defile);

});

function defile(){
    let hauteurDoc =  $(document).height();
    let hauteurFenetre = $(window).height();
    let positionScroll = $(document).scrollTop();

    //savoir qu'on est en bas
    if(positionScroll+hauteurFenetre>=hauteurDoc)
    {
        //ajout d'article
    //     $("body>.container>.row>div>div:last-of-type()").before("<div class='post-preview'>"
    //     +"<a href='post.html'>"
    //       +"<h2 class='post-title'>"
    //        +"Science has not yet mastered prophecy"
    //       +"</h2>"
    //       +"<h3 class='post-subtitle'>"
    //        + "We predict too much for the next year and yet far too little for the next ten."
    //       +"</h3>"
    //     +"</a>"
    //     +"<p class='post-meta'>Posted by"
    //      + "<a href='#'>Start Bootstrap</a>"
    //      + "on August 24, 2019</p>"
    //    + "</div><hr>");

      // .before("body>.container>.row>div>div:last-of-type()");

       $(".btn").parent().before($(".post-preview").clone());
     
    }

}

