import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import FtxTable from '../components/ftxTable';
import { getSpotData } from '../API/market';

const Future = (props) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        getAPI()
        setInterval(() => {
            getAPI()
        }, 10000);
    }, []);

    const getAPI = () => getSpotData().then(res => {
        const list = res
            .filter(e => { return e.type === 'future' })
            .filter(e => { return e.underlying === 'BTC' || e.underlying === 'ETH' })
            .map(e => {
                return {
                    asset: e.name,
                    change24hr: e.change24h,
                    bid: e.bid,
                    ask: e.ask,
                    price: e.price,
                    underlying_asset: e.underlying,
                    volume: e.volumeUsd24h
                }
            });
        setList(list);
    })

    return (
        <Layout>
            <br />
            <FtxTable data={list} />
        </Layout>
    )
}

export default Future


