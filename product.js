var products = [
{
name : 'sac',
price: 35,
img: 'space.png',
like: true,
}
,
{
name : 'chaussures',
price: 70,
img: "images.jpg",
like: false,
}
,
{
name : 'maillot',
price: 90,
img: 'space.png',
like: false,
}

]

var container = document.getElementById("container")

products.forEach(function(prod) {
    var divProd = document.createElement("div");
    var container = document.querySelector("#container");
   container.appendChild(divProd);
   divProd.setAttribute('class', "produit");
   var myImg = new Image();
   var productImg = prod.img;
   divProd.appendChild(myImg);
   myImg.setAttribute("src", productImg);
   var btn = document.createElement("button");
   divProd.appendChild(btn);
   var h = document.createElement("h4");
   var bouton = document.querySelector("button");
   btn.appendChild(h);
   h.innerHTML = "Buy"
   var divHeart = document.createElement("div");
  divProd.appendChild(divHeart);
if (prod.like == true) {
    divHeart.setAttribute('class',"fa fa-heart")
}
else 
if (prod.like == false) {
    divHeart.setAttribute('class',"far fa-heart");
}
}); 

function buy() {

}

function like () {
var heart = document.querySelector("far fa-heart");
heart.addEventListener('click', products );
}



var sac = products[0];
var chaussures = products[1];
var maillot = products[2];

