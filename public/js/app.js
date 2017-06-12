var cargarPagina = function() {
    cargarPokemones();
    $(document).on("click", ".pokemon", cargarDetallesPokemones);
};

var cargarPokemones = function() {
  var url ='http://pokeapi.co/api/v2/pokemon-species/';
  $.getJSON(url, function(response){
    var pokemons = response.results;
    crearPokemons(pokemons);
  });
};
/*var crearPokemons = function(pokemons) {
  pokemons.forEach(function(pokemon) {
    var $li = $("<li />");
    var $div = $("<div />");
    var $img = $("<img />");

    var $ul = $('#pokemons');

    $ul.append($li);
    $ul.append($div);
    $div.append($img);
    $li.attr("data-url", pokemon.url);
    $li.addClass("pokemon");
    $li.text(pokemon.name);

  });
};*/

//en este ca    so, comienza en 1 porque las imagenes estan enumeradas a partir de ese numero
var contadorImagen = 1; 

function crearPokemons(pokemons) {
    var $section = $("#pokemons");

    pokemons.forEach(function (pokemon) {
        
        var $img = $("<img />");
        var $div = $("<div />");
        var $p = $("<p />");
        
       $section.addClass("center-align");
        
       $div.addClass("pokemon center-align col s3");
        $div.attr('data-url', pokemon.url);
        
       $img.attr("src" ,'img/' + contadorImagen + ".jpg");
        //$img.attr("id" ,'imgPokemon');
        $img.addClass("center-align responsive-img");
        
       $p.text(pokemon.name);
        $p.addClass("center-align");
        
       $section.append($div);
        $div.append($img);
        $div.append($p);
        
       contadorImagen++;
    });
};

var cargarDetallesPokemones = function() {
  var url = $(this).data('url');
  console.log(url);
  $.getJSON(url, function(response){
    var colorPokemon = response.color.name;
    var habitatPokemon = response.habitat.name;
    var shapePokemon = response.shape.name;
    var generaPokemon = response.genera[0].genus;
      mostrarDetallePokemon(colorPokemon, habitatPokemon, shapePokemon, generaPokemon);
    });
};


var mostrarDetallePokemon = function(colorPokemon, habitatPokemon, shapePokemon, generaPokemon) {
    var $detallePokemonContenedor = $('#DetallePokemon');
        $detallePokemonContenedor.html(
        plantilla.replace('__color__', colorPokemon)
                .replace('__habitat__', habitatPokemon)
                .replace('__shape__', shapePokemon)
                .replace('__genera__', generaPokemon)
            );
    };

var plantilla = '<h2>Datos Pokemon</h2>' +
  '<p><strong>Color: </strong>__color__</p>' +
  '<p><strong>Habitat: </strong>__habitat__</p>' +
  '<p><strong>Shape: </strong>__shape__</p>' +
  '<p><strong>Genera: </strong>__genera__</p>';

$(document).ready(cargarPagina);

























//------$.getJSON("http://pokeapi.co/api/v2/pokemon/"),
//    function(response){
//    var pokemons = response.results;
//    crearPokemons(pokemons);
//}

//var xhr = new XMLHttpRequest();
//
// xhr.onreadystatechange = function (e) {
// 	if (this.readyState === 4) {
// 		if (this.status === 200) {
//			 var response = JSON.parse(this.response);
//			 var pokemons = response.results;
//			 var squads = JSON.parse(this.response);	
//			 crearPokemons(pokemons);
// 		}
//		
// 	}
// };
//
// xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/");
//
// xhr.send()-----;

//var xhr = new XMLHttpRequest();
//
// xhr.onreadystatechange = function (e) {
// 	if (this.readyState === 4) {
// 		if (this.status === 200) {
//			 var response = JSON.parse(this.response);
//			 var pokemons = response.results;
//			 var squads = JSON.parse(this.response);	
//			 crearPokemons(pokemons);
// 		}
//		
// 	}
// };
//
// xhr.open("GET", "http://pokeapi.co/api/v2/pokemon");
//
// xhr.send();
//
//function crearPokemons(pokemons) {
//	var ul = document.getElementById("pokemons");
//
//	pokemons.forEach(function (pokemon) {
//		var li = document.createElement("li");
//        li.textContent = pokemon.name + pokemon.url;
//
//		ul.appendChild(li);
//	});
//}








