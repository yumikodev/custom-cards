export const baseURL = "https://api-custom-cards.onrender.com";
export const v1 = `/v1`;
export const welcomeCard = (query: string) => `${v1}/cards/welcome?${query}`;
