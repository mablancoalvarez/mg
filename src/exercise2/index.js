import React from 'react'
import { Panel, PanelContent} from "@marketgoo/ola"
import fetchData from '../services/FetchData';
import Measure from '../components/Measure';
import HeaderPanel from '../components/HeaderPanel';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import MeasureCountries from '../components/MeasureCountries';


class Exercise2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            sucess: false,
            dataCountry:{},
            inProgress: true
        } 
    }

    switchCountry = (e) => {
        let index = e.target.value;
        this.setState({dataCountry : this.state.data.Countries[index]});
    }
    componentDidMount() {
        fetchData()
            .then(data => {
                    this.setState({
                        data: data,
                        inProgress: false,
                        sucess: true,
                        dataCountry : data.Countries[156]})
                    })
                    
             
            .catch(error =>{
                this.setState({
                data: null,
                inProgress: false,
                sucess: false
            })})
    }

    render() {
        let result;
        if (this.state.inProgress) {
           result =(<Loader />
            )
        } else if (this.state.sucess && this.state.data !== null && this.state.data !== undefined) {
            result= (
                <>
                    <header>
                        <h1 className="ola-title">Exercise 2</h1>
                    </header>
                    <Panel>
                        <HeaderPanel />
                        <PanelContent className="ola_panel-content grid">
                            <Measure data={this.state.data.Global}/>
                        </PanelContent >
                    </Panel>
                    <MeasureCountries data={this.state.dataCountry} countries= {this.state.data.Countries}
                    switchCountry={this.switchCountry}/>
                </>
            )
        }
        else {
            result= (
                <ErrorMessage />
            )
        } 
        return result;
    }
}

export default Exercise2;