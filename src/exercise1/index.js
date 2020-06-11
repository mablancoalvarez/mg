import React from 'react'
import data from "../data/covid19.json"
import { Panel, PanelHeader, PanelContent } from "@marketgoo/ola";
import Measure from './Measure';



export default () =>

    <>
        <header>
            <h1 className="ola-title">Exercise 1</h1>
        </header>
        <Panel>
            <PanelHeader
                className={null}
                intro={<>Aqui mostramos información sobre los datos globales a nivel mundial del impacto de la enfermedad Covid-19</>}
                title={<>Datos globales del Covid-19</>}
            />
            <PanelContent variant="fullwidth">
                <Measure />
            </PanelContent>
        </Panel>
    </>