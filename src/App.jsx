import React from "react";
import UsersTable from "./Components/UsersTable";

const App = () => {
  // Manually defined user data
  const users = [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Medhurst",
      "maidenName": "Smitham",
      "age": 50,
      "gender": "male",
      "email": "atuny0@sohu.com",
      "phone": "+63 791 675 8914",
      "username": "atuny0",
      "password": "9uQFF1Lh",
      "birthDate": "2000-12-25",
      "image": "https://robohash.org/Terry.png?set=set4",
      "bloodGroup": "A-",
      "height": 189,
      "weight": 75.4,
      "eyeColor": "Green",
      "hair": {
        "color": "Black",
        "type": "Strands"
      },
      "domain": "slashdot.org",
      "ip": "117.29.86.254",
      "address": {
        "address": "1745 T Street Southeast",
        "city": "Washington",
        "coordinates": {
          "lat": 38.867033,
          "lng": -76.979235
        },
        "postalCode": "20020",
        "state": "DC"
      }
    },
    {
      "id": 2,
      "firstName": "Jane",
      "lastName": "Quigley",
      "maidenName": "Cole",
      "age": 28,
      "gender": "male",
      "email": "hbingley1@plala.or.jp",
      "phone": "+7 813 117 7139",
      "username": "hbingley1",
      "password": "CQutx25i8r",
      "birthDate": "2003-08-02",
      "image": "https://robohash.org/Sheldon.png?set=set4",
      "bloodGroup": "O+",
      "height": 187,
      "weight": 74,
      "eyeColor": "Brown",
      "hair": {
        "color": "Blond",
        "type": "Curly"
      },
      "domain": "51.la",
      "ip": "253.240.20.181",
      "address": {
        "address": "6007 Applegate Lane",
        "city": "Louisville",
        "coordinates": {
          "lat": 38.1343013,
          "lng": -85.6498512
        },
        "postalCode": "40219",
        "state": "KY"
      }
    },
    {
      "id": 3,
      "firstName": "Terrill",
      "lastName": "Hills",
      "maidenName": "Hoeger",
      "age": 38,
      "gender": "male",
      "email": "rshawe2@51.la",
      "phone": "+63 739 292 7942",
      "username": "rshawe2",
      "password": "OWsTbMUgFc",
      "birthDate": "1992-12-30",
      "image": "https://robohash.org/Terrill.png?set=set4",
      "bloodGroup": "A-",
      "height": 200,
      "weight": 105.3,
      "eyeColor": "Gray",
      "hair": {
        "color": "Blond",
        "type": "Very curly"
      },
      "domain": "earthlink.net",
      "ip": "205.226.160.3",
      "address": {
        "address": "560 Penstock Drive",
        "city": "Grass Valley",
        "coordinates": {
          "lat": 39.213076,
          "lng": -121.077583
        },
        "postalCode": "95945",
        "state": "CA"
      }
    },
    {
      "id": 4,
      "firstName": "Miles",
      "lastName": "Cummerata",
      "maidenName": "Maggio",
      "age": 49,
      "gender": "male",
      "email": "yraigatt3@nature.com",
      "phone": "+86 461 145 4186",
      "username": "yraigatt3",
      "password": "sRQxjPfdS",
      "birthDate": "1969-01-16",
      "image": "https://robohash.org/Miles.png?set=set4",
      "bloodGroup": "B+",
      "height": 157,
      "weight": 95.9,
      "eyeColor": "Gray",
      "hair": {
        "color": "Blond",
        "type": "Very curly"
      },
      "domain": "homestead.com",
      "ip": "243.20.78.113",
      "address": {
        "address": "150 Carter Street",
        "city": "Manchester",
        "coordinates": {
          "lat": 41.76556,
          "lng": -72.473091
        },
        "postalCode": "06040",
        "state": "CT"
      }
    },
    {
      "id": 5,
      "firstName": "Mavis",
      "lastName": "Schultz",
      "maidenName": "Yundt",
      "age": 38,
      "gender": "male",
      "email": "kmeus4@upenn.edu",
      "phone": "+372 285 771 1911",
      "username": "kmeus4",
      "password": "aUTdmmmbH",
      "birthDate": "1968-11-03",
      "image": "https://robohash.org/Mavis.png?set=set4",
      "bloodGroup": "O+",
      "height": 188,
      "weight": 106.3,
      "eyeColor": "Brown",
      "hair": {
        "color": "Brown",
        "type": "Curly"
      },
      "domain": "columbia.edu",
      "ip": "103.72.86.183",
      "address": {
        "address": "2721 Lindsay Avenue",
        "city": "Louisville",
        "coordinates": {
          "lat": 38.263793,
          "lng": -85.700243
        },
        "postalCode": "40206",
        "state": "KY"
      }
    },
    {
      "id": 6,
      "firstName": "Alison",
      "lastName": "Reichert",
      "maidenName": "Franecki",
      "age": 21,
      "gender": "female",
      "email": "jtreleven5@nhs.uk",
      "phone": "+351 527 735 3642",
      "username": "jtreleven5",
      "password": "zY1nE46Zm",
      "birthDate": "1969-07-21",
      "image": "https://robohash.org/Alison.png?set=set4",
      "bloodGroup": "A+",
      "height": 149,
      "weight": 105.7,
      "eyeColor": "Amber",
      "hair": {
        "color": "Blond",
        "type": "Straight"
      },
      "domain": "bandcamp.com",
      "ip": "49.201.206.36",
      "address": {
        "address": "18 Densmore Drive",
        "city": "Essex",
        "coordinates": {
          "lat": 44.492953,
          "lng": -73.101883
        },
        "postalCode": "05452",
        "state": "VT"
      }
    },
    {
      "id": 7,
      "firstName": "Oleta",
      "lastName": "Abbott",
      "maidenName": "Wyman",
      "age": 31,
      "gender": "female",
      "email": "dpettegre6@columbia.edu",
      "phone": "+62 640 802 7111",
      "username": "dpettegre6",
      "password": "YVmhktgYVS",
      "birthDate": "1982-02-21",
      "image": "https://robohash.org/Oleta.png?set=set4",
      "bloodGroup": "B-",
      "height": 172,
      "weight": 78.1,
      "eyeColor": "Blue",
      "hair": {
        "color": "Chestnut",
        "type": "Wavy"
      },
      "domain": "ovh.net",
      "ip": "25.207.107.146",
      "address": {
        "address": "637 Britannia Drive",
        "city": "Vallejo",
        "coordinates": {
          "lat": 38.10477,
          "lng": -122.193849
        },
        "postalCode": "94591",
        "state": "CA"
      },
    },
    {
      "id": 8,
      "firstName": "Ewell",
      "lastName": "Mueller",
      "maidenName": "Durgan",
      "age": 29,
      "gender": "male",
      "email": "ggude7@chron.com",
      "phone": "+86 946 297 2275",
      "username": "ggude7",
      "password": "MWwlaeWcOoF6",
      "birthDate": "1964-08-24",
      "image": "https://robohash.org/Ewell.png?set=set4",
      "bloodGroup": "A-",
      "height": 146,
      "weight": 52.1,
      "eyeColor": "Blue",
      "hair": {
        "color": "Chestnut",
        "type": "Wavy"
      },
      "domain": "homestead.com",
      "ip": "91.200.56.127",
      "address": {
        "address": "5601 West Crocus Drive",
        "city": "Glendale",
        "coordinates": {
          "lat": 33.6152469,
          "lng": -112.179737
        },
        "postalCode": "85306",
        "state": "AZ"
      }
    },
    {
      "id": 9,
      "firstName": "Demetrius",
      "lastName": "Corkery",
      "maidenName": "Gleason",
      "age": 22,
      "gender": "male",
      "email": "nloiterton8@aol.com",
      "phone": "+86 356 590 9727",
      "username": "nloiterton8",
      "password": "HTQxxXV9Bq4",
      "birthDate": "1971-03-11",
      "image": "https://robohash.org/Demetrius.png?set=set4",
      "bloodGroup": "A+",
      "height": 170,
      "weight": 97.1,
      "eyeColor": "Green",
      "hair": {
        "color": "Brown",
        "type": "Strands"
      },
      "domain": "goodreads.com",
      "ip": "78.170.185.120",
      "address": {
        "address": "5403 Illinois Avenue",
        "city": "Nashville",
        "coordinates": {
          "lat": 36.157077,
          "lng": -86.853827
        },
        "postalCode": "37209",
        "state": "TN"
      }
    },
    {
      "id": 10,
      "firstName": "Eleanora",
      "lastName": "Price",
      "maidenName": "Cummings",
      "age": 37,
      "gender": "female",
      "email": "umcgourty9@jalbum.net",
      "phone": "+60 184 408 0824",
      "username": "umcgourty9",
      "password": "i0xzpX",
      "birthDate": "1958-08-11",
      "image": "https://robohash.org/Eleanora.png?set=set4",
      "bloodGroup": "O+",
      "height": 198,
      "weight": 48,
      "eyeColor": "Blue",
      "hair": {
        "color": "Chestnut",
        "type": "Wavy"
      },
      "domain": "alibaba.com",
      "ip": "73.15.179.178",
      "address": {
        "address": "8821 West Myrtle Avenue",
        "city": "Glendale",
        "coordinates": {
          "lat": 33.5404296,
          "lng": -112.2488391
        },
        "postalCode": "85305",
        "state": "AZ"
      }
    }
  ];

  return (
    <div>
      <h1>User Directory</h1>
      <UsersTable users={users} />
    </div>
  );
};

export default App;
