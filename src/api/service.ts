import axiosClient from "./axiosClient";

const getApiKey = async () => {
  return await axiosClient.get("data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22");
};

export const fakeApi = async () => {
    return {DATA: ["sdnkndkvsnlvkd", "nskvnsdlkvndsl","woidvnsdokvnosidnvosdi"]}
}

export default getApiKey;
