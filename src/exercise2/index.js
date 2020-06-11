import React from 'react'
import { Panel, PanelHeader, PanelContent, Metric, Spinner } from "@marketgoo/ola"
import fetchData from '../services/FetchData';
import Measure from '../components/Measure';
import HeaderPanel from '../components/HeaderPanel';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';


class Exercise2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            sucess: false,
            inProgress: true
        }
    }
    componentDidMount() {
        fetchData()
            .then(data => {
                setTimeout(() => {
                    this.setState({
                        data: data,
                        inProgress: false,
                        sucess: true
                    })
                }, 1000)

            })
            .catch(error =>{ console.log(error)
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
                        <PanelContent variant="fullwidth">
                            <Measure data={this.state.data}/>
                        </PanelContent>
                    </Panel>

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