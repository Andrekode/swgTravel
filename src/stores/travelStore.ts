import { action, makeAutoObservable, observable } from 'mobx';
import { Planet, TravelPoints } from '../type/travel.type';
import { TravelRoute } from '../type/travelRoute.type';
import travelService from '../services/travelService';
const INIT_TRAVELPOINTS: TravelPoints = {
    name: '',
    coords: {
        x: 0,
        y: 0,
        z: 0,
    },
    interplanetaryTravelAllowed: false,
    incomingTravelAllowed: false,
};

const INIT_TRAVELROUTE: TravelRoute = {
    currentPlanet: '',
    currentPlanetTravelPoint: '',
};

class TravelStore {
    @observable planetNames: string[] = [''];
    @observable destinationTravelPoints: TravelPoints[] = [INIT_TRAVELPOINTS];
    @observable currentLocationTravelPoints: TravelPoints[] = [INIT_TRAVELPOINTS];
    @observable travelRoute: TravelRoute[] = [INIT_TRAVELROUTE];

    constructor() {
        makeAutoObservable(this);
    }
    @action
    getPlanets() {
        this.planetNames = travelService.getAllPlanets();
    }

    @action
    getDestinationTravelPoints(destination: string) {
        const result = travelService.getDestinationTravelPoints(destination);
        this.destinationTravelPoints = result;
    }

    @action
    getCurrentLocationTravelPoints(currentLocation: string) {
        const result = travelService.getCurrentLocationTravelPoints(currentLocation);
        this.currentLocationTravelPoints = result;
    }

    @action
    getTravelRoute(
        currentLocation: string,
        currentLocationTravelPoint: string,
        destination: string,
        destinationTravelPoint: string,
    ) {
        const result = travelService.getTravelRoute(
            currentLocation,
            currentLocationTravelPoint,
            destination,
            destinationTravelPoint,
        );

        this.travelRoute = result;
    }
}

const travelStore = new TravelStore();
export default travelStore;
