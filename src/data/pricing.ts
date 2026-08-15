export interface RoutePrice {
  route: string;
  normal: number;
  airport: number;
}

export const ROUTE_PRICES: RoutePrice[] = [
  { route: "Dubai → Abu Dhabi", normal: 200, airport: 250 },
  { route: "Abu Dhabi → Dubai", normal: 200, airport: 250 },
  { route: "Abu Dhabi → Sharjah", normal: 280, airport: 300 },
  { route: "Sharjah → Abu Dhabi", normal: 280, airport: 300 },
  { route: "Abu Dhabi → Ajman", normal: 300, airport: 320 },
  { route: "Ajman → Abu Dhabi", normal: 300, airport: 320 },
];
