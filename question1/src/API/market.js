// import axios from "axios"

// export const getSpotData = async () => {
//     const res = await axios.get("https://ftx.com/api/markets");
//     if (res.status === 200) {
//         return res.data.result;
//     }
// }


// use fetch
export const getSpotData = async () => {
    const marketData = await fetch(`https://ftx.com/api/markets`, {});
    if (marketData.status === 200) {
        return marketData.json().then(
            data => {
                return data.result
            })
    }
}
