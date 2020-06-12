import React from 'react';
import HeaderPanel from './HeaderPanel';
import { Panel, PanelContent, Spinner } from "@marketgoo/ola"

const Loader = () => {
  return (
    <>
      <header>
        <h1 className="ola-title">Exercise 2</h1>
      </header>
      <Panel>
        <HeaderPanel />
        <PanelContent variant="fullwidth">
          <div className="loader">
            <Spinner
              size="big"
            />
          </div>
        </PanelContent>
      </Panel>
    </>)
}

export default Loader;