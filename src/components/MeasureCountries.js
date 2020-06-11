import React from 'react';
import { Select, Metric, Panel, HeaderPanel, PanelContent } from "@marketgoo/ola";

function getCountryNames(props) {
    let result = props.data.Countries.map((element, index) => {
        return { label: element.Country, value: index }
    });
    console.log(result)
    return result;
}
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

function switchCountry (event){
    console.log(event)
}
const MeasureCountries = (props) => {
    console.log(props)
    return (
        <>
             <Panel>
             
                <figure>
                    <Select
                        className={null}
                        options={getCountryNames(props)}
                        onchange={switchCountry()}

                    />
                </figure>
                <PanelContent variant="fullwidth">
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
                </PanelContent>
            </Panel>
        </>)

}

export default MeasureCountries;