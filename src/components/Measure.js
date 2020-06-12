import React from 'react';
import { Metric } from "@marketgoo/ola";


function round(number) {
    let result;
    if (number > 1000000) {
        result = (number / 1000000).toFixed(2) + ' M'
    }
    
    else if (number > 1000){
        result = (number / 1000).toFixed(2) + ' k'
    }
    else {
        result = number.toString();
    }

    return result;
}

class Measure extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    const { data } = this.props;
        return (
            <>
                <Metric
                    title="Nuevos confirmados"
                    value={round(data.NewConfirmed)}
                />
                <Metric
                    title="Nuevos fallecidos"
                    value={round(data.NewDeaths)}
                    variant="negative"
                />
                <Metric
                    title="Nuevos recuperados"
                    value={round(data.NewRecovered)}
                    variant="positive"
                />
                <Metric
                    title="Total confirmados"
                    value={round(data.TotalConfirmed)}
                />
                <Metric
                    title="Total fallecidos"
                    value={round(data.TotalDeaths)}
                    variant="negative"
                />
                <Metric
                    title="Total recuperados"
                    value={round(data.TotalRecovered)}
                    variant="positive"
                />
            </>)
    }
}

export default Measure;