import { Planet } from '../type/planet.type';
const planets: Map<string, Planet> = new Map([
    // ... planets map data ...
    [
        'corellia',
        {
            planetName: 'Corellia',
            connectingPlanets: [
                'yavin4',
                'tatooine',
                'naboo',
                'endor',
                'talus',
                'dantooine',
                'dathomir',
            ],
        },
    ],
    [
        'dantooine',
        {
            planetName: 'Dantooine',
            connectingPlanets: ['corellia'],
        },
    ],
    [
        'dathomir',
        {
            planetName: 'Dathomir',
            connectingPlanets: ['corellia'],
        },
    ],
    [
        'endor',
        {
            planetName: 'Endor',
            connectingPlanets: ['tatooine', 'naboo'],
        },
    ],
    [
        'lok',
        {
            planetName: 'Lok',
            connectingPlanets: ['tatooine', 'naboo'],
        },
    ],
    [
        'naboo',
        {
            planetName: 'Naboo',
            connectingPlanets: ['corellia', 'tatooine', 'lok', 'rori', 'endor'],
        },
    ],
    [
        'rori',
        {
            planetName: 'Rori',
            connectingPlanets: ['naboo'],
        },
    ],
    [
        'yavin4',
        {
            planetName: 'Yavin4',
            connectingPlanets: ['corellia'],
        },
    ],
    [
        'talus',
        {
            planetName: 'Talus',
            connectingPlanets: ['corellia'],
        },
    ],
    [
        'tatooine',
        {
            planetName: 'Tatooine',
            connectingPlanets: ['corellia', 'lok', 'naboo'],
        },
    ],
]);

export default planets;
