import React from 'react';
import HeaderPanel from './HeaderPanel';
import { Panel, PanelContent } from "@marketgoo/ola"


const ErrorMessage = () => {
    return (
        <>
            <Panel>
                <HeaderPanel />
                <PanelContent>
                <p>
                    Error: Too Many Request
                </p>
                </PanelContent>
            </Panel>
        </>
    )
}
export default ErrorMessage;