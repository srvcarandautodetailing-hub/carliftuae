export interface RoutePrice {
  route: string;
  sharing: number;
  private: number;
}

export const ROUTE_PRICES: RoutePrice[] = [
  { route: "Dubai → Abu Dhabi", sharing: 100, private: 170 },
  { route: "Abu Dhabi → Dubai", sharing: 100, private: 170 },
  { route: "Abu Dhabi → Sharjah", sharing: 130, private: 200 },
  { route: "Sharjah → Abu Dhabi", sharing: 130, private: 200 },
  { route: "Abu Dhabi → Ajman", sharing: 130, private: 200 },
  { route: "Ajman → Abu Dhabi", sharing: 130, private: 200 },
];
