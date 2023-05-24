import planets from '../assets/planets2';
import { Path } from '@customType/path.type';

class PlanetTravelService {
    dijkstra(startPlanet: string, endPlanet: string): Path {
        const distances: Map<string, number> = new Map();
        const previous: Map<string, string | null> = new Map();
        const unvisited: Set<string> = new Set();

        for (const planet of planets.keys()) {
            distances.set(planet, Infinity);
            previous.set(planet, null);
            unvisited.add(planet);
        }

        distances.set(startPlanet, 0);

        while (unvisited.size > 0) {
            let currentPlanet = '';
            for (const planet of unvisited) {
                if (!currentPlanet || distances.get(planet)! < distances.get(currentPlanet)!) {
                    currentPlanet = planet;
                }
            }

            if (currentPlanet === endPlanet) {
                break;
            }

            unvisited.delete(currentPlanet);

            const currentPlanetData = planets.get(currentPlanet)!;

            for (const connectingPlanet of currentPlanetData.connectingPlanets) {
                const currentDistance = distances.get(currentPlanet)!;
                const newDistance = currentDistance + 1; // Assuming a fixed distance of 1 between connected planets

                if (newDistance < distances.get(connectingPlanet)!) {
                    distances.set(connectingPlanet, newDistance);
                    previous.set(connectingPlanet, currentPlanet);
                }
            }
        }

        const path: Path = {
            totalDistance: distances.get(endPlanet)!,
            travelPoints: [],
        };

        let currentPlanet: string | null = endPlanet;
        while (currentPlanet) {
            path.travelPoints.unshift(currentPlanet);
            currentPlanet = previous.get(currentPlanet)!;
        }

        return path;
    }
}

const planetTravelService = new PlanetTravelService();

export default planetTravelService;
