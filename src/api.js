export const API_URL = `https://www.deckofcardsapi.com/api`;

export function GET_CARDS(cardQtn) {
  return {
    url: `${API_URL}/deck/new/draw/?count=${cardQtn}`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
      },
    },
  };
}
