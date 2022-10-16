import { nanoid } from 'nanoid';
import { Planet, TravelPoints } from '../type/travel.type';
import planets from '../assets/planets';

class TravelService {
    getAllPlanets() {
        const planetNames: string[] = planets.map((planet) => planet.planetName);

        return planetNames;
    }

    getDestinationTravelPoints(destination: string): TravelPoints[] {
        const result: Planet = planets.filter((planet) => planet.planetName === destination)[0];

        if (!destination) {
            return [
                {
                    name: '',
                    coords: {
                        x: 0,
                        y: 0,
                        z: 0,
                    },
                    interplanetaryTravelAllowed: false,
                    incomingTravelAllowed: false,
                },
            ];
        } else {
            const destinationTravelPoints: TravelPoints[] = result.planetTravelPoints.filter(
                (point) => point.interplanetaryTravelAllowed,
            );
            return destinationTravelPoints;
        }
    }

    getCurrentLocationTravelPoints(currentLocation: string): TravelPoints[] {
        const result: Planet = planets.filter((planet) => planet.planetName === currentLocation)[0];

        if (!currentLocation) {
            return [
                {
                    name: '',
                    coords: {
                        x: 0,
                        y: 0,
                        z: 0,
                    },
                    interplanetaryTravelAllowed: false,
                    incomingTravelAllowed: false,
                },
            ];
        } else {
            const currentLocationTravelPoints: TravelPoints[] = result.planetTravelPoints.filter(
                (point) => point.interplanetaryTravelAllowed,
            );
            return currentLocationTravelPoints;
        }
    }
    getTravelRoute(
        currentLocation: string,
        currentLocationTravelPoint: string,
        destination: string,
        destinationTravelPoint: string,
    ): Planet[] {
        const result: Planet[] = planets.map((planet) => planet);
        if (
            destination &&
            currentLocation &&
            currentLocationTravelPoint &&
            destinationTravelPoint
        ) {
            const currentLocationObj: Planet = planets.filter(
                (planet) => planet.planetName === currentLocation,
            )[0];

            const destinationObj: Planet = planets.filter(
                (planet) => planet.planetName === destination,
            )[0];

            //  check if  travel from current to destination is possible
            const IsCurrentLocationConnectedToDestination: boolean =
                currentLocationObj.connectingPlanets.includes(destination.toLowerCase());

            // check destination connected points with currentLocation points
            const isDestConnectionInCurrentConnection = destinationObj.connectingPlanets.some(
                (planet) => currentLocationObj.connectingPlanets.includes(planet.toLowerCase()),
            );

            if (IsCurrentLocationConnectedToDestination) {
                const planetsRoute = planets.filter(
                    (planet) =>
                        planet.planetName === currentLocation || planet.planetName === destination,
                );

                console.log('is connected', planetsRoute);
            }
            if (isDestConnectionInCurrentConnection) {
                console.log('connect by other planets');
            }

            console.log('currentloc', currentLocation);
            console.log('current', currentLocationObj);
            console.log('destination', destination);
            console.log('destination', destinationObj);
            console.log(
                'current has connection to destination',
                IsCurrentLocationConnectedToDestination,
            );
            console.log(
                'destination in currentlocation conecting planets',
                isDestConnectionInCurrentConnection,
            );
        }

        return result;
    }
}

export default new TravelService();
