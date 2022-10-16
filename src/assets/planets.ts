import type { Planet } from '../type/travel.type';
const planets: Planet[] = [
    {
        planetName: 'Corellia',
        planetTravelPoints: [
            {
                name: 'Coronet Shuttle B',
                coords: {
                    x: -329.76605,
                    z: 28,
                    y: -4641.23,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Coronet Shuttle A',
                coords: {
                    x: -25.671804,
                    z: 28,
                    y: -4409.7847,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Coronet Starport',
                coords: {
                    x: -66.760902,
                    z: 28,
                    y: -4711.3281,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Vreni Island Shuttle',
                coords: {
                    x: -5551.9473,
                    z: 1.890146,
                    y: -6059.9673,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Tyrena Shuttle B',
                coords: {
                    x: -5600.6367,
                    z: 21,
                    y: -2790.7429,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Tyrena Shuttle A',
                coords: {
                    x: -5005.354,
                    z: 21,
                    y: -2386.9819,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Tyrena Starport',
                coords: {
                    x: -5003.0649,
                    z: 21,
                    y: -2228.3665,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Kor Vella Shuttleport',
                coords: {
                    x: -3775.2546,
                    z: 31,
                    y: 3234.2202,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Kor Vella Starport',
                coords: {
                    x: -3157.2834,
                    z: 31,
                    y: 2876.2029,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Doaba Guerfel Shuttleport',
                coords: {
                    x: 3085.4963,
                    z: 280,
                    y: 4993.0098,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Doaba Guerfel Starport',
                coords: {
                    x: 3349.8933,
                    z: 308,
                    y: 5598.1362,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Bela Vistal Shuttleport A',
                coords: {
                    x: 6644.269,
                    z: 330,
                    y: -5922.5225,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Bela Vistal Shuttleport B',
                coords: {
                    x: 6930.8042,
                    z: 330,
                    y: -5534.8936,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
        ],
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
    {
        planetName: 'Dantooine',
        planetTravelPoints: [
            {
                name: 'Dantooine Mining Outpost',
                coords: {
                    x: -635.96887,
                    z: 3,
                    y: 2507.0115,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Dantooine Imperial Outpost',
                coords: {
                    x: -4208.6602,
                    z: 3,
                    y: -2350.24,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Dantooine Agro Outpost',
                coords: {
                    x: 1569.66,
                    z: 4,
                    y: -6415.7598,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
        ],
        connectingPlanets: ['corellia'],
    },
    {
        planetName: 'Dathomir',
        planetTravelPoints: [
            {
                name: 'Trade Outpost',
                coords: {
                    x: 618.89258,
                    z: 6.039608,
                    y: 3092.0142,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Science Outpost',
                coords: {
                    x: -49.021923,
                    z: 18,
                    y: -1584.7278,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
        ],
        connectingPlanets: ['corellia'],
    },
    {
        planetName: 'Endor',
        planetTravelPoints: [
            {
                name: 'Smuggler Outpost',
                coords: {
                    x: -950.59241,
                    z: 73,
                    y: 1553.4125,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Research Outpost',
                coords: {
                    x: 3201.6599,
                    z: 24,
                    y: -3499.76,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
        ],
        connectingPlanets: ['corellia', 'naboo'],
    },
    {
        planetName: 'Lok',
        planetTravelPoints: [
            {
                name: "Nym's Stronghold",
                coords: {
                    x: 478.92676,
                    z: 9,
                    y: 5511.9565,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
        ],
        connectingPlanets: ['tatooine', 'naboo'],
    },
    {
        planetName: 'Naboo',
        planetTravelPoints: [
            {
                name: 'Keren Starport',
                coords: {
                    x: 1371.5938,
                    z: 13,
                    y: 2747.9043,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Keren Shuttleport South',
                coords: {
                    x: 1567.5193,
                    z: 25,
                    y: 2837.8777,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Keren Shuttleport',
                coords: {
                    x: 2021.0026,
                    z: 19,
                    y: 2525.679,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Theed Shuttle A',
                coords: {
                    x: -5856.1055,
                    z: 6,
                    y: 4172.1606,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Theed Shuttle B',
                coords: {
                    x: -5005,
                    z: 6,
                    y: 4072,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Theed Shuttle C',
                coords: {
                    x: -5411.0171,
                    z: 6,
                    y: 4322.3315,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Theed Spaceport',
                coords: {
                    x: -4858.834,
                    z: 5.9483199,
                    y: 4164.0679,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'The Lake Retreat',
                coords: {
                    x: -5494.4224,
                    z: -150,
                    y: -21.837162,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Moenia',
                coords: {
                    x: 4731.1743,
                    z: 4.1700001,
                    y: -4677.5439,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Moenia Shuttleport',
                coords: {
                    x: 4961.9409,
                    z: 3.75,
                    y: -4892.6997,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: "Dee'ja Peak Shuttleport",
                coords: {
                    x: 5331.9375,
                    z: 327.02765,
                    y: -1576.6733,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Kaadara Starport',
                coords: {
                    x: 5280.2002,
                    z: -192,
                    y: 6688.0498,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Kaadara Shuttleport',
                coords: {
                    x: 5123.3857,
                    z: -192,
                    y: 6616.0264,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
        ],
        connectingPlanets: ['corellia', 'tatooine', 'lok', 'rori', 'endor'],
    },
    {
        planetName: 'Rori',
        planetTravelPoints: [
            {
                name: 'Restuss Starport',
                coords: {
                    x: 5340,
                    z: 80,
                    y: 5734,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Restuss Shuttleport',
                coords: {
                    x: 5211,
                    z: 80,
                    y: 5791,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Narmle Starport',
                coords: {
                    x: -5374.0718,
                    z: 80,
                    y: -2188.6143,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Narmle Shuttleport',
                coords: {
                    x: -5255.4116,
                    z: 80.664185,
                    y: -2161.6274,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Rebel Outpost',
                coords: {
                    x: 3691.9023,
                    z: 96,
                    y: -6403.4404,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
        ],
        connectingPlanets: ['naboo'],
    },
    {
        planetName: 'Talus',
        planetTravelPoints: [
            {
                name: 'Dearic Starport',
                coords: {
                    x: 263.58401,
                    z: 6,
                    y: -2952.1284,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Dearic Shuttleport',
                coords: {
                    x: 699.297,
                    z: 6,
                    y: -3041.4199,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Talus Imperial Outpost',
                coords: {
                    x: -2226,
                    z: 20,
                    y: 2319,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Nashal Shuttleport',
                coords: {
                    x: 4334.5786,
                    z: 9.8999996,
                    y: 5431.0415,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Nashal Starport',
                coords: {
                    x: 4453.7212,
                    z: 2,
                    y: 5354.3345,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
        ],
        connectingPlanets: ['corellia'],
    },
    {
        planetName: 'Tatooine',
        planetTravelPoints: [
            {
                name: 'Mos Eisley Shuttleport',
                coords: {
                    x: 3416.6914,
                    z: 5,
                    y: -4648.1411,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Mos Eisley Starport',
                coords: {
                    x: 3599.894,
                    z: 5,
                    y: -4780.4487,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Bestine Starport',
                coords: {
                    x: -1361.1917,
                    z: 12,
                    y: -3600.0254,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Bestine Shuttleport',
                coords: {
                    x: -1098.4836,
                    z: 12,
                    y: -3563.5342,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Mos Espa Shuttleport South',
                coords: {
                    x: -2897.0933,
                    z: 5,
                    y: 1933.4144,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Mos Espa Shuttleport West',
                coords: {
                    x: -3112.1296,
                    z: 5,
                    y: 2176.9607,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Mos Espa Starport',
                coords: {
                    x: -2833.1609,
                    z: 5,
                    y: 2107.3787,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Mos Espa Shuttleport East',
                coords: {
                    x: -2803.511,
                    z: 5,
                    y: 2182.9648,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Anchorhead Shuttleport',
                coords: {
                    x: 47.565128,
                    z: 52,
                    y: -5338.9072,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Mos Entha Spaceport',
                coords: {
                    x: 1266.0996,
                    z: 7,
                    y: 3065.1392,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Mos Entha Shuttle B',
                coords: {
                    x: 1395.447,
                    z: 7,
                    y: 3467.0117,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
            {
                name: 'Mos Entha Shuttle A',
                coords: {
                    x: 1730.8828,
                    z: 7,
                    y: 3184.6135,
                },
                interplanetaryTravelAllowed: false,
                incomingTravelAllowed: true,
            },
        ],
        connectingPlanets: ['corellia', 'lok', 'naboo'],
    },
    {
        planetName: 'Yavin4',
        planetTravelPoints: [
            {
                name: 'Yavin IV Labor Outpost',
                coords: {
                    x: -6921.6733,
                    z: 73,
                    y: -5726.5161,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Yavin IV Mining Outpost',
                coords: {
                    x: -267.23914,
                    z: 35,
                    y: 4896.3013,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: true,
            },
            {
                name: 'Yavin IV Imperial Outpost',
                coords: {
                    x: 4054.1,
                    z: 37,
                    y: -6216.9,
                },
                interplanetaryTravelAllowed: true,
                incomingTravelAllowed: false,
            },
        ],
        connectingPlanets: ['corellia'],
    },
];

export default planets;
