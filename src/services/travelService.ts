import { nanoid } from 'nanoid';
import { Planet, TravelPoints } from '../type/travel.type';
import { TravelRoute } from '../type/travelRoute.type';
import planets from '../assets/planets';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

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
            const destinationTravelPoints: TravelPoints[] = result.planetTravelPoints;

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
            const currentLocationTravelPoints: TravelPoints[] = result.planetTravelPoints;
            return currentLocationTravelPoints;
        }
    }
    getTravelRoute(
        currentLocation: string,
        currentLocationTravelPoint: string,
        destination: string,
        destinationTravelPoint: string,
    ): TravelRoute[] {
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

            const travelRoute: TravelRoute[] = [
                {
                    currentPlanet: currentLocation,
                    currentPlanetTravelPoint: currentLocationTravelPoint,
                },
            ];

            // check if current travel point allows interplanetaryTravel

            const isCurrentTravelPointInterplanetaryTravelAllowed: boolean =
                currentLocationObj.planetTravelPoints.filter(
                    (point) => point.name === currentLocationTravelPoint,
                )[0]?.interplanetaryTravelAllowed;

            if (!isCurrentTravelPointInterplanetaryTravelAllowed) {
                const nextAllowed = currentLocationObj.planetTravelPoints.filter(
                    (point) => point.interplanetaryTravelAllowed,
                )[0];

                travelRoute.push({
                    currentPlanet: currentLocation,
                    currentPlanetTravelPoint: nextAllowed.name,
                });
            }

            const isDestinationTravelPointInterplanetaryTravelAllowed: boolean =
                currentLocationObj.planetTravelPoints.filter(
                    (point) => point.name === destinationTravelPoint,
                )[0]?.interplanetaryTravelAllowed;

            // check if current planet is connected to next planet
            const isCurrentLocationConnectToDestination: boolean =
                currentLocationObj.connectingPlanets.includes(destination.toLowerCase());

            if (!isCurrentLocationConnectToDestination) {
                const isConnections: boolean = destinationObj.connectingPlanets.some((planet) =>
                    currentLocationObj.connectingPlanets.includes(planet.toLowerCase()),
                );
                if (!isConnections) {
                    console.log('NO CONNECTIONS.. Connecting to Naboo');
                    const naboo: Planet = planets.filter(
                        (planet) => planet.planetName === 'Naboo',
                    )[0];
                    const nabooTravelPoint = naboo.planetTravelPoints.filter(
                        (point) => point.interplanetaryTravelAllowed,
                    )[0];

                    travelRoute.push(
                        {
                            currentPlanet: naboo.planetName,
                            currentPlanetTravelPoint: nabooTravelPoint.name,
                        },

                        {
                            currentPlanet: destination,
                            currentPlanetTravelPoint: destinationTravelPoint,
                        },
                    );
                } else {
                    const connectedPlanets = destinationObj.connectingPlanets.filter((planet) =>
                        currentLocationObj.connectingPlanets.includes(planet),
                    );

                    const connectedPlanet: Planet = planets.filter(
                        (planet) =>
                            planet.planetName === capitalizeFirstLetter(connectedPlanets[0]),
                    )[0];

                    const travelPointConnectedPlanet = connectedPlanet.planetTravelPoints.filter(
                        (point) => point.interplanetaryTravelAllowed,
                    )[0];

                    travelRoute.push(
                        {
                            currentPlanet: capitalizeFirstLetter(connectedPlanets[0]),
                            currentPlanetTravelPoint: travelPointConnectedPlanet.name,
                        },
                        {
                            currentPlanet: destination,
                            currentPlanetTravelPoint: destinationTravelPoint,
                        },
                    );
                }
            } else if (!isDestinationTravelPointInterplanetaryTravelAllowed) {
                const nextAllowed = destinationObj.planetTravelPoints.filter(
                    (point) => point.interplanetaryTravelAllowed,
                )[0];

                travelRoute.push(
                    {
                        currentPlanet: destination,
                        currentPlanetTravelPoint: nextAllowed.name,
                    },
                    {
                        currentPlanet: destination,
                        currentPlanetTravelPoint: destinationTravelPoint,
                    },
                );
            } else {
                travelRoute.push({
                    currentPlanet: destination,
                    currentPlanetTravelPoint: destinationTravelPoint,
                });
            }
            return travelRoute;
        } else {
            return [
                {
                    currentPlanet: '',
                    currentPlanetTravelPoint: '',
                },
            ];
        }
    }
}

export default new TravelService();
