import Axios from "./ApiAxios";
const api = Axios();
const URL = `surah`;

export default {
     async showPageNumber() {
        const res = await api.get(`${URL}/2`)
        return res
      },
}
