import React from 'react';
import HeaderPanel from './HeaderPanel';
import { Panel, PanelHeader, PanelContent, Metric, Spinner } from "@marketgoo/ola"

const Loader = () => {

  return (
    <>
      <header>
        <h1 className="ola-title">Exercise 2</h1>
      </header>
      <Panel>
        <HeaderPanel />
        <PanelContent variant="fullwidth">
          <figure>
            <Spinner
              className={null}
              size="big"
            />
          </figure>
        </PanelContent>
      </Panel>


    </>)
}

export default Loader;