import { nanoid } from 'nanoid';
import allVanillaTravelSpots from '../assets/vanillaTravel';
import Travel from '../type/travel.type';

class TravelService {
    getAvailableDestinationsByCurrentPlanet(currentPlanet: string, localTravel: boolean): Travel[] {
        const travelObject = Object.entries(allVanillaTravelSpots).map(([key, value]) => {
            const commandStringToArray = value.split(' ');

            return {
                id: nanoid(),
                currentPlanet: commandStringToArray[1],
                starport: commandStringToArray[2],
                nextPlanet: commandStringToArray[3],
                starport2: commandStringToArray[4],
                alias: key,
                command: value,
            };
        });

        if (localTravel) {
            return travelObject.filter(
                (planets) =>
                    planets.currentPlanet.includes(currentPlanet) &&
                    planets.nextPlanet.includes(currentPlanet),
            );
        } else {
            return travelObject.filter(
                (planets) =>
                    planets.currentPlanet.includes(currentPlanet) &&
                    !planets.nextPlanet.includes(currentPlanet),
            );
        }
    }
}

export default new TravelService();
