
let images = ["images/index-slide01.jpg","images/index-slide02.jpg","images/index-slide03.jpg"];
//lancer limage boucle
let compteur = 0;
let timer;

$(function(){

  //on execute changeimage
  timer = setInterval(changeImage, 8000);
  //fleche gauche click
  let flecheGauche = $(".la-chevron-left");
  flecheGauche.on("click",reculeImage);
  //fleche droite click
  let flecheDroite = $(".la-chevron-right");
  flecheDroite.on("click",changeImage);
  //hover stop carousel
  let diapo = $("header>section");
  diapo.on("mouseover", stopDiapo).on("mouseout", playDiapo);//(mouseleave = sortie de la souris) ou (mouseout = sourie dehors)
  //ajout rond
   
  let points = $("header>section>div:last-of-type");
  //points.html("");
  points.empty();   
  for(let img=0; img< images.length; img++)
{     
   if(img==0){
    points.append("<i class='las la-dot-circle'></i>");

   }
   else{
    points.append("<i class='las la-circle'></i>");  
   }
}



});

function changeImage(){

        //efface point
    // let ronds = $("header>section>div:last-of-type>i");
     $("header>section>div:last-of-type>i:eq("+compteur+")").addClass("la-circle").removeClass("la-dot-circle");
    

     /*  ou bien 
     let baliseI = $("header > section > div:last-child i")
     $(balisesI[compteur]).removeClass(blabla).addClass(blabla);
     */
     compteur++;
    if(compteur==images.length)
    {
        compteur=0;
    }

    $("header>section>img").fadeOut(1000,function(){ 
      
      $("header>section>img").attr("src",images[compteur]);
     
      $("header>section>img").fadeIn(1000);
    });
   
  

     //remetre point
     $("header>section>div:last-of-type>i:eq("+compteur+")").addClass("la-dot-circle").removeClass("la-circle");

}

function reculeImage(){
    // //efface point
    //   let ronds = document.querySelectorAll("header>section>div:last-of-type>i");
    $("header>section>div:last-of-type>i:eq("+compteur+")").addClass("la-circle").removeClass("la-dot-circle");
      compteur--;
      if(compteur<0)
      {
          compteur=images.length-1;
      }
      let diapo = $("header>section>img"); 
      diapo.attr("src",images[compteur]);
    //   //remetre point
    $("header>section>div:last-of-type>i:eq("+compteur+")").addClass("la-dot-circle").removeClass("la-circle");
  }

/**
 * selection du rond
 */
function stopDiapo() {
    clearInterval(timer);
}
/**
 * selection du rond
 */
function playDiapo() {
   
   timer = setInterval(changeImage, 8000);
}


