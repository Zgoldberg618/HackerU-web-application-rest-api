import http from "./httpService";
import config from "../config.json";

export function createCard(card) {
  return http.post(`${config.apiUrl}/cards`, card);
}

export function getMyCards() {
  return http.get(`${config.apiUrl}/cards/my-cards`);
}

export function getCard(id) {
  return http.get(`${config.apiUrl}/cards/${id}`);
}

export function editCard({ _id, ...card }) {
  return http.put(`${config.apiUrl}/cards/${_id}`, card);
}

export function deleteCard(id) {
  return http.delete(`${config.apiUrl}/cards/${id}`);
}

const cardService = {
  deleteCard,
  getCard,
  createCard,
  getMyCards,
  editCard,
};

export default cardService;
