var cargarPagina = function() {
    cargarPokemones();
    $(document).on("click", ".pokemon", mostrarDetallePokemon)
};

var cargarPokemones = function() {
    var url ="http://pokeapi.co/api/v2/pokemon/";
    $.getJSON(url, function(response){
        var pokemons = response.results;
        var total = response.count;
        mostrarTotalPokemons(total);
        mostrarPokemons(pokemons);
    });
};

var mostrarTotalPokemons = function(total) {
    $('#total').text(total);
};

var mostrarPokemons = function(pokemons) {
    
    pokemons.forEach(function(pokemon) {
              var $li = $("<li />");
              var $ul = $('#pokemons');
              
         $ul.append($li);
         $li.attr("data-url", pokemon.url);
         $li.addClass("pokemon");
          $li.text(pokemon.name);
              console.log(pokemon.name);
          });
    
};

var plantilla = '<h2>Habitat</h2>' +
      '<p><strong>Nombre: </strong>__nombre__</p>'; //+
      //'<p><strong>Clima: </strong>__clima__</p>'


var mostrarDetallePokemon = function(total) {
    var url = $(this).data('url');
    console.log(url);
    var $habitatContenedor = $('#DetalleHabitat');
    $.getJSON(url, function(response) {
        $habitatContenedor.html(
        plantilla.replace('__nombre__', response.name)
                //.replace('__clima__', response.climate)
            );
    });
};

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








