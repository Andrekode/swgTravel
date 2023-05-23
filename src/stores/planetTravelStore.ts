import planetTravelService from '@services/planetTravelService';
import { action, observable, makeObservable } from 'mobx';

class PlanetTravelStore {
    startPlanet = 'corellia';
    endPlanet = 'tatooine';
    travelPoints = '';
    totalDistance = 0;
    path = {};

    constructor() {
        makeObservable(this, {
            startPlanet: observable,
            endPlanet: observable,
            travelPoints: observable,
            totalDistance: observable,
            path: observable,
        });
    }

    @action
    findShortesPath = () => {
        const startPlanet = this.startPlanet;
        const endPlanet = this.endPlanet;
        const shortestPath = planetTravelService.dijkstra(startPlanet, endPlanet);

        this.path = shortestPath;
        this.travelPoints = shortestPath.travelPoints.join(' -> ');
        this.totalDistance = shortestPath.totalDistance;

        console.log('Shortest path:', this.travelPoints);
        console.log('Total distance:', this.totalDistance);

        if (shortestPath.travelPoints.length > 2) {
            console.log('Intermediate planets:');
            shortestPath.travelPoints.map((point) => console.log('- ' + point));
        }
    };

    @action
    setStartPlanet = (startPlanetName: string) => {
        this.startPlanet = startPlanetName;
    };

    @action
    setEndPlanet = (endPlanetName: string) => {
        this.endPlanet = endPlanetName;
    };
}

const planetTravelStore = new PlanetTravelStore();

export default planetTravelStore;
