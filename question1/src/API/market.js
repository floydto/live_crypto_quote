import axios from "axios"

export const getSpotData = async () => {
    const res = await axios.get("https://ftx.com/api/markets");
    if (res.status === 200) {
        return res.data.result;
    }
}
