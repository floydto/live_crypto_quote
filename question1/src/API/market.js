import axios from "axios"

export const getSpotData = async () => {
    const res = await axios.get("https://ftx.com/api/markets");
    if (res.status === 200) {
        console.log(res.data.result);
        return res.data.result;
    }
}
