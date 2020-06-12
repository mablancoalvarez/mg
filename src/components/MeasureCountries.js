import React from 'react';
import { Select, Panel, PanelContent } from "@marketgoo/ola";
import Measure from '../components/Measure';
import HeaderPanel2 from '../components/HeaderPanel2';

function getCountryNames(props) {
    let result = props.countries.map((element, index) => {
        return { label: element.Country, value: index }
    });
    return result;
}

class MeasureCountries extends React.Component {
  
    switchCountry = (e) => {
        this.props.switchCountry(e)
    }
    render() {
        const { data } = this.props;
        return (
            <>
                <Panel>
                    <HeaderPanel2 country={data.Country}/>
                    <figure>
                        <Select
                            defaultValue="156"
                            options={getCountryNames(this.props)}
                            id='select'
                            onChange={this.switchCountry}
                        />
                    </figure>
                    <PanelContent className="ola_panel-content grid">
                    <Measure data={data}/>
                    </PanelContent>
                </Panel>
            </>)
    }
}

export default MeasureCountries;