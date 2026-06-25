import { ok } from "@/src/server/responses";

type LocationPayload = {
  lat?: number;
  lon?: number;
};

const near = (
  lat: number,
  lon: number,
  targetLat: number,
  targetLon: number,
  radius = 0.8,
) => Math.abs(lat - targetLat) < radius && Math.abs(lon - targetLon) < radius;

export async function POST(request: Request) {
  const body = (await request.json()) as LocationPayload;
  const lat = Number(body.lat);
  const lon = Number(body.lon);

  if (Number.isNaN(lat) || Number.isNaN(lon)) {
    return ok({ city: "Москва", confidence: "fallback" });
  }

  if (near(lat, lon, 59.54, 30.88, 0.6)) {
    return ok({ city: "Тосно", confidence: "geo" });
  }

  if (near(lat, lon, 59.93, 30.31, 0.8)) {
    return ok({ city: "Санкт-Петербург", confidence: "geo" });
  }

  if (near(lat, lon, 51.53, 46.03, 0.8)) {
    return ok({ city: "Саратов", confidence: "geo" });
  }

  if (near(lat, lon, 55.75, 37.61, 1.2)) {
    return ok({ city: "Москва", confidence: "geo" });
  }

  return ok({ city: "Москва", confidence: "fallback" });
}
