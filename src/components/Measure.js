import React from 'react';
import { Metric} from "@marketgoo/ola";


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

const Measure = (props) => {
    console.log(props)
    return (
        <>
      
  
            <div className="left-measure">
            
                <figure>
                    <Metric
                        title="Nuevos confirmados"
                        value={round(props.data.Global.NewConfirmed)}
                    />
                </figure>
            
                <figure>
                    <Metric
                        title="Nuevos fallecidos"
                        value={round(props.data.Global.NewDeaths)}
                        variant="negative"
                    />
                </figure>

                <figure>
                    <Metric
                        title="Nuevos recuperados"
                        value={round(props.data.Global.NewRecovered)}
                        variant="positive"
                    />
                </figure>
            </div>
           
            <div className="right-measure">
                <figure>
                    <Metric
                        title="Total confirmados"
                        value={round(props.data.Global.TotalConfirmed)}
                    />
                </figure>
                <figure>
                    <Metric
                        title="Total fallecidos"
                        value={round(props.data.Global.TotalDeaths)}
                        variant="negative"
                    />
                </figure>
                <figure>
                    <Metric
                        title="Total recuperados"
                        value={round(props.data.Global.TotalRecovered)}
                        variant="positive"
                    />
                </figure>
            </div>
          
        </>)

}

export default Measure;