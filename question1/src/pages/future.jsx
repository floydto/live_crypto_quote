import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import FtxTable from '../components/ftxTable';
import { getSpotData } from '../API/market';

const Future = (props) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        getSpotData().then(res => {
            const spotList = res.filter(e => { return e.underlying === 'BTC' || e.underlying === 'ETH' })
            setList(spotList)
        })
    }, []);

    return (
        <Layout>
            <FtxTable data={list} />
        </Layout>
    )
}

export default Future


