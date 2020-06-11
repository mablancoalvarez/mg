import React from 'react'
import data from "../data/covid19.json"
import { Panel, PanelContent } from "@marketgoo/ola";
import Measure from '../components/Measure';
import HeaderPanel from '../components/HeaderPanel';



export default () =>
    <>
        <header>
            <h1 className="ola-title">Exercise 1</h1>
        </header>
        <Panel>
            <HeaderPanel />
            <PanelContent variant="fullwidth">
                <Measure data={data}
                 />
            </PanelContent>
        </Panel>
    </>