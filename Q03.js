var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}


aquarium['capacityInGallons'];
aquarium['numberOfRocks']+2;
console.log(aquarium['fish'][2]);
aquarium['fish'][0].size='4 inches';
console.log(aquarium['fish'][0].size);
aquarium['fish'].push({type: 'starfish',size: '5 inches',color: 'blue'});
console.log(aquarium['fish'])
