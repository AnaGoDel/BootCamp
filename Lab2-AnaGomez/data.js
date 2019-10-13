var NH = {
    name: "NH",
    location: "Málaga Centro",
    img: "https://x.cdrst.com/foto/hotel-sf/b68/granderesp/nh-malaga-exterior-85ffa68.jpg",
};

var Mencey = {
    name: "Mencey",
    location: "Tenerife",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/0e/99/03/54/hotel-grounds.jpg",
};

var stars = {
    una:
        "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};


var hotel = prompt("Elija el hotel que quiere calificar: NH o Mencey");

var rate = prompt("Elija la puntuación deseada (uno, dos, tres, cuatro, cinco)");

var anonymous = confirm("¿Quiere que su reseña sea anónima?");

document.getElementById("hotel-name").innerHTML = "Hotel " + this[hotel].name;

document.getElementById("hotel-location").innerHTML = "Ubicado en " + this[hotel].location;

document.getElementById("hotel-img").src = this[hotel].img;

document.getElementById("rating-anonymous").checked = anonymous;

document.getElementById("rating-stars").innerHTML = stars[rate];