import { action, makeAutoObservable, observable } from 'mobx';
import travelObject from '../utils/transformObject';
import type Travel from '../type/travel.type';

const INIT_TRAVEL: Travel = {
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
    @observable searchString = '';

    constructor() {
        makeAutoObservable(this);
    }

    @action
    getTravels() {
        this.travels = travelObject;
    }
    @action
    getAvailableDestinations(currentPlanet: string) {
        this.travelsAvailable = this.travels.filter((planet) =>
            planet.currentPlanet.includes(currentPlanet),
        );
    }
    @action
    handleSearch(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { value } = e.target;
        this.searchString = value;
        this.getAvailableDestinations(this.searchString);
    }
}

const travelStore = new TravelStore();
export default travelStore;
