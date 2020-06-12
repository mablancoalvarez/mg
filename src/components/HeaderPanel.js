import React from 'react';
import { PanelHeader } from "@marketgoo/ola";

const HeaderPanel = () => {
    return (
        <PanelHeader
            className={null}
            intro={<>Aqui mostramos información sobre los datos globales a nivel mundial del impacto de la enfermedad Covid-19</>}
            title={<>Datos globales del Covid-19</>}
        />
    )
}

export default HeaderPanel;