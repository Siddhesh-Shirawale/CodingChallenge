import axios from "axios";

const baseURL = "http://localhost:8000/";

const api = {
   company(url = baseURL + "company/") {
      return {
         fetchAll: () => axios.get(url),
         fetchById: (id) => axios.get(url + id),
         create: (newRecord) => axios.post(url, newRecord),
         update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
         delete: (id) => axios.delete(url + id),
      };
   },
};
export default api;
