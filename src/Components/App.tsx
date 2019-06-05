import React from "react";
import styled from "styled-components";

const Backplate = styled.main`
    height: 100vh;
    width: 100vw;

    display: grid;
    grid-template: 100vh / 50vw 50vw;
    align-items: center;
    justify-content: center;
    padding-left: 10vw;

    background-image: url("${require("../assets/svg/circuit-board.svg")}"), 
                      linear-gradient(139deg, #0e4452 11%, #002b36 100%);
`;

const Code = styled.code`
    font-family: "Fira Mono", monospace;
    color: #e7e7e7;
    font-size: 2.5rem;
`;

const Prompt = styled.span`
    color: #d97625;
`;

function App() {
    return (
        <Backplate>
            <Code>
                <Prompt>$</Prompt> whoami <br />
                Navrin Thomas. <br /> <br />
                <Prompt>$</Prompt> id -gn $USER <br />
                Frontend single page applications, <br />
                Backend API development, <br />
                Server tooling and deployment.
            </Code>
        </Backplate>
    );
}

export default App;
