import { action, makeAutoObservable, observable } from 'mobx';
import type Travel from '../type/travel.type';
import travelService from '../services/travelService';
import { debounce } from 'lodash';
const INIT_TRAVEL: Travel = {
    id: '',
    currentPlanet: '',
    starport: '',
    nextPlanet: '',
    starport2: '',
    alias: '',
    command: '',
};
class TravelStore {
    @observable travels: Travel[] = [INIT_TRAVEL];
    @observable travelsAvailable: Travel[] = [INIT_TRAVEL];
    @observable travelsAvailableCurrentPlanet: Travel[] = [INIT_TRAVEL];
    @observable currentPlanet = '';
    @observable nextPlanet = '';
    @observable travelRoute: Travel[] = [];
    @observable isTravelsLocal = false;

    constructor() {
        makeAutoObservable(this);
    }

    @action
    getAvailableDestinationsCurrentPlanet() {
        this.travelsAvailableCurrentPlanet = travelService.getAvailableDestinationsByCurrentPlanet(
            this.currentPlanet,
            this.isTravelsLocal,
        );
    }

    @action
    setIsTravelLocal() {
        this.isTravelsLocal = !this.isTravelsLocal;
    }

    @action
    setCurrentPlanet(currentPlanet: string) {
        this.currentPlanet = currentPlanet;
    }

    @action
    setNextPlanet(nextPlanet: string) {
        this.nextPlanet = nextPlanet;
    }

    @action
    setCurrentPlanetToNextPlanet() {
        this.currentPlanet = this.nextPlanet;
    }

    @action
    setTravelRoute(nextPlanet: Travel): void {
        this.travelRoute.push(nextPlanet);
    }

    search = debounce(
        action((query) => {
            this.currentPlanet = query;
        }),
        500,
    );
}

const travelStore = new TravelStore();
export default travelStore;
