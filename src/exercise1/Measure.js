import React from 'react';
import data from "../data/covid19.json"
import { Metric } from "@marketgoo/ola";

function round(number) {
    let result;
    if (number > 1000000) {
        result = (number / 1000000).toFixed(2) + ' M'
    }
    else {
        result = (number / 1000).toFixed(2) + ' k'
    }

    return result;
}

const Measure = () => {

    return (
        <>
            <figure>
                <Metric
                    title="Nuevos confirmados"
                    value={round(data.Global.NewConfirmed)}
                />
            </figure>
            <figure>
                <Metric
                    title="Total confirmados"
                    value={round(data.Global.TotalConfirmed)}
                />
            </figure>
            <figure>
                <Metric
                    title="Nuevos fallecidos"
                    value={round(data.Global.NewDeaths)}
                    variant="negative"
                />
            </figure>
            <figure>
                <Metric
                    title="Total fallecidos"
                    value={round(data.Global.TotalDeaths)}
                    variant="negative"
                />
            </figure>
            <figure>
                <Metric
                    title="Nuevos recuperados"
                    value={round(data.Global.NewRecovered)}
                    variant="positive"
                />
            </figure>
            <figure>
                <Metric
                    title="Total recuperados"
                    value={round(data.Global.TotalRecovered)}
                    variant="positive"
                />
            </figure>


        </>)

}

export default Measure;