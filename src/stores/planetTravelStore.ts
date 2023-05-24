import planetTravelService from '@services/planetTravelService';
import { action, observable, makeObservable } from 'mobx';
import { Path } from '@customType/path.type';

class PlanetTravelStore {
    startPlanet = '';
    endPlanet = '';
    travelPoints = '';
    totalDistance = 0;
    path: Path = {
        totalDistance: 0,
        travelPoints: [],
    };

    constructor() {
        makeObservable(this, {
            startPlanet: observable,
            endPlanet: observable,
            travelPoints: observable,
            totalDistance: observable,
            path: observable,
            findShortesPath: action,
            setStartPlanet: action,
            setEndPlanet: action,
        });
    }

    findShortesPath = () => {
        const startPlanet = this.startPlanet;
        const endPlanet = this.endPlanet;
        const shortestPath = planetTravelService.dijkstra(startPlanet, endPlanet);

        this.path = shortestPath;
        this.travelPoints = shortestPath.travelPoints
            .map((point) => point.charAt(0).toUpperCase() + point.slice(1))
            .join(' -> ');
        this.totalDistance = shortestPath.totalDistance;

        console.log('Shortest path:', this.travelPoints);
        console.log('Total distance:', this.totalDistance);

        if (shortestPath.travelPoints.length > 2) {
            console.log('Intermediate planets:');
            shortestPath.travelPoints.map((point) => console.log('- ' + point));
        }
    };

    setStartPlanet = (startPlanetName: string) => {
        this.startPlanet = startPlanetName;
    };

    setEndPlanet = (endPlanetName: string) => {
        this.endPlanet = endPlanetName;
    };
}

const planetTravelStore = new PlanetTravelStore();

export default planetTravelStore;
