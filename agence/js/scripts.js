//variables globales
let images = ["images/index-slide01.jpg","images/index-slide02.jpg","images/index-slide03.jpg","images/index-slide01.jpg"];
    //lancer limage boucle
let compteur = 0;
let timer;
window.onload = () => {

    //on execute changeimage
    timer = setInterval(changeImage, 5000);
    //fleche gauche click
    let flecheGauche = document.querySelector(".la-chevron-left");
    flecheGauche.addEventListener("click",reculeImage)
    //fleche droite click
    let flecheDroite = document.querySelector(".la-chevron-right");
    flecheDroite.addEventListener("click",changeImage)
    //hover stop carousel
    let diapo = document.querySelector("header>section");
    diapo.addEventListener("mouseover", stopDiapo);//mouseenter=1fois et mouseover=lance plusieur fois tous les 350ms mais heritage aussi
    diapo.addEventListener("mouseout", playDiapo);//(mouseleave = sortie de la souris) ou (mouseout = sourie dehors)
    //ajout rond
    ajoutRond();

    let logoFacebook =  document.querySelectorAll("a");
    for(let l=0; l<logoFacebook.length;l++)
    {
        logoFacebook[l].addEventListener("click",popUpFacebook);
    }
    
   
}

function popUpFacebook(event){
    event.preventDefault();

    //en jquery $(titre).data("titre")
    if(confirm("Voulez-vous aller sur ce site " + this.dataset.titre)){

        location.href=this.href;
    }
}

function changeImage(){
    //selection image
    // let img = document.querySelector("header>section>img"); 
    // for(let i=0; i< images.length; i++)
    // {     
    //     if(img.getAttribute("src")==images[i])
    //     {
    //         if(i!=  images.length-1)
    //         {
    //            console.log(images[i+1]);
    //            img.setAttribute("src", images[i+1]);break;
    //         }
    //         else{
    //             console.log(images[0]);
    //             img.setAttribute("src", images[0]);break;
    //         }
           
    //     }
    // }

      
  
      //gestion image
        //efface point
    let ronds = document.querySelectorAll("header>section>div:last-of-type>i");
    ronds[compteur].classList.replace("la-dot-circle","la-circle");
    compteur++;
    if(compteur==images.length)
    {
        compteur=0;
    }
    let diapo = document.querySelector("header>section>img"); 
    diapo.src = images[compteur];

     //remetre point
     ronds[compteur].classList.replace("la-circle","la-dot-circle");

}

function reculeImage(){
  //efface point
    let ronds = document.querySelectorAll("header>section>div:last-of-type>i");
    ronds[compteur].classList.replace("la-dot-circle","la-circle");
    compteur--;
    if(compteur<0)
    {
        compteur=images.length-1;
    }
    let diapo = document.querySelector("header>section>img"); 
    diapo.src = images[compteur];

    //remetre point
    ronds[compteur].classList.replace("la-circle","la-dot-circle");
}
/**
 * selection du rond
 */
function stopDiapo() {
    clearInterval(timer);
    //console.log("stop" + timer);
}
/**
 * selection du rond
 */
function playDiapo() {
   timer = setInterval(changeImage, 5000);
   //console.log("play" + timer);
}

/**
 * selection du rond
 */
// function ajoutRond(){
//   //gestion de rond
//   let ronds = document.querySelectorAll("header>section>div:last-of-type>i");   
//   for(let i=0; i< images.length; i++)
// {     
//     if(ronds[i] == null)
//     {
//     let itemI = document.createElement("i");
//     itemI.setAttribute("class","las la-circle");
//     let parentI = document.querySelector("header>section>div:last-of-type");  
//     parentI.appendChild(itemI); //insertbefore pour avant
//     }
// }
// }
function ajoutRond(){
    //gestion de rond
    let points = document.querySelector("header>section>div:last-of-type");
    points.innerHTML="";
    for(let img=0; img< images.length; img++)
  {     
     let baliseI = document.createElement("i");
     if(img==0){
        baliseI.classList.add("las","la-dot-circle");
     }
     
     else{
        baliseI.classList.add("las","la-circle");
     }// baliseI.classList.add("las","la-circle")baliseI.setAttribute("class","las la-circle")
     points.appendChild(baliseI); //insertbefore pour avant
  }
  //gestionRond();
}
// function gestionRond(){
//     //gestion rond
//     console.log(compteur);
    // let ronds = document.querySelectorAll("header>section>div:last-of-type>i"); 
    // for(let i=0; i< ronds.length; i++)
    // {     
       
    //     if(i!=compteur)
    //     {
    //        // ronds[compteur].setAttribute("class","las la-dot-circle");
      
    //     }
    //     else{
    //         ronds[i].classList.replace("la-circle","la-dot-circle");
    //     }
    // }
  
// }



