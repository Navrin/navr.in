import React from "react";
import styled from "styled-components";
import FakeTerminal from "./FakeTerminal";
import Skills from "./Skills";

const Backplate = styled.main`
    height: 100vh;
    width: 100vw;

    display: grid;
    grid-template: 100vh / 50vw 50vw;
    @media (max-width: 660px) {
        grid-template: 100vh / 90vw;
    }
    align-items: flex-start;
    justify-content: center;
    padding-top: 10vh;
    padding-left: 10vw;
    padding-right: 5vw;

    background-image: url("${require("../assets/svg/circuit-board.svg")}"), 
                      linear-gradient(139deg, #0e4452 11%, #002b36 100%);
`;

function App() {
    return (
        <Backplate>
            <FakeTerminal />
            <Skills />
        </Backplate>
    );
}

export default App;
