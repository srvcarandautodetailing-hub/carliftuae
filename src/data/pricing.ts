export interface RoutePrice {
  route: string;
  private: number;
}

export const ROUTE_PRICES: RoutePrice[] = [
  { route: "Dubai → Abu Dhabi", private: 200 },
  { route: "Abu Dhabi → Dubai", private: 200 },
  { route: "Abu Dhabi → Ajman", private: 250 },
  { route: "Ajman → Abu Dhabi", private: 250 },
  { route: "Abu Dhabi → Ras Al Khaimah", private: 400 },
  { route: "Ras Al Khaimah → Abu Dhabi", private: 400 },
  { route: "Abu Dhabi → Al Ain", private: 220 },
  { route: "Al Ain → Abu Dhabi", private: 220 },
];
