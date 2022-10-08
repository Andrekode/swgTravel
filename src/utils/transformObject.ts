import allVanillaTravelSpots from '../assets/vanillaTravel';

const travelObject = Object.entries(allVanillaTravelSpots).map(([key, value]) => {
    const commandStringToArray = value.split(' ');
    return {
        currentPlanet: commandStringToArray[1],
        starport: commandStringToArray[2],
        nextPlanet: commandStringToArray[3],
        starport2: commandStringToArray[4],
        alias: key,
        command: value,
    };
});

export default travelObject;
