import React from 'react';
import { PanelHeader } from "@marketgoo/ola";

const HeaderPanel2 = (props) => {

    return (
        
        <PanelHeader
            className={null}
            intro={<>Aqui mostramos información sobre los datos globales del impacto de la enfermedad Covid-19 en {props.country}</>}
            title={<>Datos globales del Covid-19</>}
        />

    )
}

export default HeaderPanel2;