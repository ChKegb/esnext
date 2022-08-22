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
/**
 * Créer la classe FreeTrip qui étends Trip.
 * 
 */

class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this._price = 0;
    }

      constructor(id, name, imageUrl) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
  }
}
/**
 * Créer une constante freeTrip, instance de la classe FreeTrip avec les informations suivantes :
◦ id : nantes
◦ name : Nantes
◦ imageUrl : img/nantes.jpg
 * 
 */
const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
/**
 * Afficher dans la console freeTrip.toString()
 */
console.log(freeTrip.toString());

/**
 * Promise, Set, Map, Arrow Function
 * 
 */




 class TripService {
    constructor() {
        // TODO Set of 3 trips
        //
        // new Trip('paris', 'Paris', 'img/paris.jpg')
        // new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
        this.tripsSet = new Set();
        this.tripsSet.add(new Trip("paris", "Paris", "img/paris.jpg"));
        this.tripsSet.add(new Trip("nantes", "Nantes", "img/nantes.jpg"));
        this.tripsSet.add(new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg"));
        
    
    }
    /**
     * Compléter la méthode findByName(tripName) pour qu’elle renvoie une promesse.
     * Pour simuler une récupération des données distantes, utiliser la méthode setTimeout(fn,delay) pour créer une latence de 2s. 
     * Renvoyer l’objet Trip correspondant au nom du voyage en paramètre.
     * Si aucun voyage ne correspond au nom en paramètre, renvoyer une erreur No trip with name xxx.
     * 
     */
    findByName(tripName) {
            return new Promise((resolve, reject) => { setTimeout( () => {
                            // ici l'exécution du code est asynchrone
                            // TODO utiliser resolve et reject en fonction du résultat de la recherche

                let tripToReturn = null;
                for(let trip of this.tripsSet) {
                    if(trip.name == tripName) {
                        tripToReturn = trip;
                    }
                }
                if (tripToReturn != null) {
                    resolve(tripToReturn);
                } else {
                    reject("Pas de voyage à ce nom");
                }
            }, 2000) });
    }
 }
 class PriceService {
        /**
         * Compléter le constructeur de la classe PriceService pour initialiser une Map (clé == identifiant voyage, valeur == prix). 
         * Stocker y 2 prix pour les villes Paris et Rio de Janeiro.
         * 
         */
        constructor() {
            // TODO Map of 2 trips
            // 'paris' --> price == 100
            // 'rio-de-janeiro' --> price == 800) // no price for 'nantes'
            this.pricesMap = new Map();
            this.pricesMap.set("paris", 100);
            this.pricesMap.set("rio-de-janeiro", 800);
        }


        findPriceByTripId(tripId) {
            return new Promise((resolve, reject) => { 
                setTimeout( () => {
                    // ici l'exécution du code est asynchrone
                    // TODO utiliser resolve et reject en fonction du résultat de la recherche

                    let priceTo = null;
                    for (let [key, value] of this.pricesMap.entries()) {
                        if (key == tripId) {
                            priceTo = value;
                        }
                    }
                    if(priceTo != null) {
                        resolve(priceTo);
                    }else {
                        reject("Il n existe pas de voyage avec cet id");
                    }
                }, 2000)

            });

        }
    }


    let tripService = new TripService();
    tripService.findByName("Paris").then((data) => {
        console.log(data);
        },
        (reject) => {
        console.log(reject);
        throw reject;
        }
    ).catch((err) => console.log(err));


    let priceService = new PriceService();
    priceService.findPriceByTripId('paris').then(
        (data) => {
            console.log(data);
        },(reject) => {
        console.log(reject);
        throw reject;
        }
    ).catch((err) => console.log(err));