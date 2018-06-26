//DOM
//queryselector -->primer elemento
//queryselectorall --> todos los elementos
// let links = document.querySelectorAll("a");
// links.forEach(function(link){
//   console.log(link);
// });


// let celdas = document.querySelectorAll("td");

// celdas.forEach(function(td){
//    td.addEventListener("click",function(){
//      console.log(this);
//    });
// });

//----------------------------------

//Obtener los elementos dela clase .close
let links = document.querySelectorAll(".close");
//Recorrerlos
links.forEach(function(link){
  //Agregar un evento click a cada uno de ellos
  link.addEventListener("click",function(e){
      e.preventDefault();
      let content = document.querySelector(".content");
      content.classList.remove("fadeInDown");
      content.classList.remove("animated");

      content.classList.add("fadeOutUp");
      content.classList.add("animated");

	      setTimeout(function(){
	      	location.href = "../index.html";
	      },600);

      return false;
  });

});

