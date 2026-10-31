export interface RoutePrice {
  route: string;
  sharing: number;
  private: number;
}

export const ROUTE_PRICES: RoutePrice[] = [
  { route: "Dubai → Abu Dhabi", sharing: 100, private: 200 },
  { route: "Abu Dhabi → Dubai", sharing: 100, private: 200 },
  { route: "Abu Dhabi → Ajman", sharing: 140, private: 250 },
  { route: "Ajman → Abu Dhabi", sharing: 140, private: 250 },
  { route: "Abu Dhabi → Ras Al Khaimah", sharing: 170, private: 400 },
  { route: "Ras Al Khaimah → Abu Dhabi", sharing: 170, private: 400 },
  { route: "Abu Dhabi → Al Ain", sharing: 120, private: 220 },
  { route: "Al Ain → Abu Dhabi", sharing: 120, private: 220 },
];
