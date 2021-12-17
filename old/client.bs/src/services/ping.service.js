import http from "./database";

class PingService {
  ping() {
    return http.get("/ping");
  }
}

export default new PingService();