import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import FtxTable from '../components/ftxTable';
import { getSpotData } from '../API/market';


const Spot = (props) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        getAPI();
        setInterval(() => {
            getAPI();
        }, 10000);
    }, []);

    const getAPI = () => getSpotData().then(res => {
        const spotList = res.filter(e => { return e.quoteCurrency === 'BTC' || e.quoteCurrency === 'ETH' })
            .filter(e => { return e.type === 'spot' })
            .map(e => {
                return {
                    asset: e.name,
                    bid: e.bid,
                    ask: e.ask,
                    price: e.price,
                    underlying_asset: e.underlying,
                    volume: e.volumeUsd24h
                }
            });
        setList(spotList)
    })



    return (
        <Layout>
            <br />

            <FtxTable data={list} />
        </Layout>
    )
}


export default Spot


