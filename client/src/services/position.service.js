import database from "./database";

class PositionDataService {
  getAll() {
    return database.get("/positions");
  }

  get(id) {
    return database.get(`/positions/${id}`);
  }

  create(data) {
    return database.post("/positions", data);
  }

  update(id, data) {
    return database.put(`/positions/${id}`, data);
  }

  delete(id) {
    return database.delete(`/positions/${id}`);
  }

  deleteAll() {
    return database.delete(`/positions`);
  }

}

export default new PositionDataService();