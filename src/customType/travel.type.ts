interface Planet {
    planetName: string;
    planetTravelPoints: TravelPoints[];
    connectingPlanets: string[];
}

interface TravelPoints {
    name: string;
    coords: Coord;
    interplanetaryTravelAllowed: boolean;
    incomingTravelAllowed: boolean;
}

interface Coord {
    x: number;
    z: number;
    y: number;
}

export type { Planet, TravelPoints };
