# RESTful Web Service using Node, Docker and JSON

This is a REST API created for a CS 612 assignment.

## Data Model:

The data are stored inside `/pokemon.json` and `/img.json`. The `/pokemon.json` contains an array (`pokemon`) of objects. Each object contains information about an pokemon which a unique `id` and `/img.json` has images of each pokemon.

```javascript
[{
        "id": "01",
        "name": "Bulbasaur",
        "species": "Seed Pokémon",
        "type": [
            "Grass",
            "Poison"
        ],
        "height": "2′4″ (0.71m)",
        "weight": "15.2 lbs (6.9 kg)",
        "abilities": [
            "Overgrow",
            "Chlorophyll"
        ],
        "stats": {
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "sp.atk": 65,
            "sp.def": 65,
            "speed": 45,
            "total": 318
        },
        "evolution": [
            "Bulbasaur",
            "Ivysaur",
            "Venusaur"
        ]
    },
    {
        "id": "02",
        "name": "Ivysaur",
        "species": "Seed Pokémon",
        "type": [
            "Grass",
            "Poison"
        ],
        "height": "3′3″ (0.99m)",
        "weight": "28.7 lbs (13.0 kg)",
        "abilities": [
            "Overgrow",
            "Chlorophyll"
        ],
        "stats": {
            "hp": 60,
            "attack": 62,
            "defense": 63,
            "sp.atk": 80,
            "sp.def": 80,
            "speed": 60,
            "total": 405
        },
        "evolution": [
            "Bulbasaur",
            "Ivysaur",
            "Venusaur"
        ]
    },
    ...

## API Endpoints

You can utilize two `GET` endpoints:

[1] `/` - returns the full JSON object

[2] `/getpokemon` - returns the full JSON object 

[3] `/getpokemon:id` - returns the pokemon object for the `id` requested

[4] `/getpokemon:id/evolution` - returns the list evolution object for the `id` requested

[5] `/getpokemon:id/evolution:id` - returns the pokemon object from the evolution list that matches the `id` requested

## Setup Instructions

[without Docker]
- Clone or download the repo
- `cd` into the project root directory
- Run `npm install` to install all dependencies
- Run `npm run start` to start the server and build the service
- Go to `http://localhost:3000/[endpoint]` to view the data you want

[with Docker]
- Clone or download the repo
- `cd` into the project root directory
- Install Docker if you don't already have it: visit installation instructions for [Mac](https://docs.docker.com/docker-for-mac/install/) or [Windows](https://docs.docker.com/docker-for-windows/install/)
- Run Docker:
  - Build your container: `docker build -t [container-name] .`
  - Start your container:
    - (a) run without a volume: `docker run -it -p 3002:3000 [container-name]` OR
    - (b) run with a volume (this commands enables your container to listen for changes and refresh): `docker run -it -p 3002:3000 -v $(pwd):/app [container-name]`
- Go to `http://localhost:3002/[endpoint]` to view the data you want