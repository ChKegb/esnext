/**
 * Créer une variable favoriteCityId (à l’aide mot clé let) qui contient la chaîne de caractères : "rome".
 * 
 */
let favoriteCityId ="rome";
/**
 * 
 * Afficher dans la console (console.log(...)) la variable favoriteCityId.
 */
console.log(favoriteCityId);
/**
 * Affecter une nouvelle valeur à la variable favoriteCityId : une chaînes de caractères : "paris".
• Afficher dans la console (console.log(...)) la variable favoriteCityId.
 */
favoriteCityId="paris";

console.log(favoriteCityId);

/**
 * Const
 * Créer une constante citiesId (à l’aide mot clé const) qui contient un tableau de chaînes de caractères : "paris", "nyc", "rome", "rio-de-janeiro".
 */
 const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];

 /**
  * 
  * Afficher dans la console (console.log(...)) la constante citiesId.
  */
 console.log(citiesId);
 /**
  * 
  * Ajouter un nouvel élément au tableau : "tokyo".
  */
 citiesId.push('tokyo');
 console.log(citiesId);

 /**
  * 
  * Création d’objet
  * Créer une fonction getWeather qui possède un paramètre cityId.
  */

  function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;

    let object = {city: city, temperature: temperature}

    return object
}
/**
 * 
 * Créer une constante weather qui exécute la fonction getWeather en lui passant en paramètre favoriteCityId.

 */
 const weather = getWeather(favoriteCityId);
 console.log(weather);

 /**
  * 
  * Affectation destructurée
  * 
  */

  const {city, temperature} = weather;
// Afficher dans la console la valeur de constante city,temperature
  console.log(city);
  console.log(temperature);

  /**
   * 
   * Rest operator
   * A l’aide du rest operator, créer à partir du tableau citiesId, 3 constantes : parisId, nycId et othersCitiesId.
   * 
   */

   const [parisId, nycId, ...otherCitiesId] = citiesId;

   console.log(parisId);
   console.log(nycId);
   console.log(otherCitiesId);

/**
 * Classe
 * Créer une classe Trip.
 * Ajouter un constructeur avec les propriétés : id, name, imageUrl
 * 
 * 
 */



   class Trip {

    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    toString() {
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`;
    }

    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
    }
}


const parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');

console.log(parisTrip);
console.log(parisTrip.name);

parisTrip.price = 100;

console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();

console.log(defaultTrip.toString());

