import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const FontSizing = css`
    font-size: 2.5rem;
    @media (max-width: 660px) {
        font-size: 2rem;
    }
`;

const Font = css`
    font-family: "Fira Mono", monospace;
    color: #e7e7e7;
`;

export const Code = styled.code`
    white-space: pre-wrap;
    max-height: 60vh;
    overflow-y: scroll;
    ${Font}
    ${FontSizing}
`;

export const Prompt = styled.span`
    color: #d97625;
`;

const Input = styled.input`
    outline: none;
    border: none;
    width: 50%;
    background: none;
    font-size: 2.5rem;
    ${FontSizing}
    ${Font}

    &::placeholder {
        color: rgba(200, 200, 200, 0.3);
    }
`;

interface TerminalCommand<T> {
    output: (...inputs: T[]) => string;
}

interface TerminalCommandList {
    [trigger: string]: TerminalCommand<string>;
}

const COMMANDS: TerminalCommandList = {
    whoami: {
        output: () => "Navrin Thomas.",
    },
    interests: {
        output: () => {
            return (
                "Frontend single page applications,\n" +
                "Backend API development, \n" +
                "Server tooling and deployment."
            );
        },
    },
    ls: {
        output: () => {
            return Object.keys(COMMANDS).join(", ");
        },
    },
};

interface TerminalState {
    history: string[];
}

const defaultTerminalState = ["whoami", "interests"];

const FakeTerminal = () => {
    const [history, setHistory] = useState(defaultTerminalState);
    const [input, setInput] = useState("");
    const [code, setCodeRef] = useState<HTMLElement | null>(null);

    const onTerminalSubmit:
        | ((event: React.KeyboardEvent<HTMLInputElement>) => void)
        | undefined = e => {
        // 13 == enter key
        if (e.keyCode !== 13) {
            return;
        }

        setHistory([...history, input]);
        setInput("");
    };

    useEffect(() => {
        if (code == null) {
            return;
        }
        code.scrollTop = code.scrollHeight;
    });

    return (
        <Code ref={e => setCodeRef(e)}>
            {history.map((v, i) => (
                <span key={v + i}>
                    <Prompt>$</Prompt>
                    {" " + v} <br />
                    {getOutputOrDefault(v)}
                    <br /> <br />
                </span>
            ))}
            <span>
                <Prompt>$</Prompt>{" "}
                <Input
                    autoFocus
                    value={input}
                    onChange={e => {
                        setInput(e.target.value);
                    }}
                    placeholder="interact with me..."
                    onKeyDown={onTerminalSubmit}
                />
            </span>
        </Code>
    );
};

function getOutputOrDefault(v: string): React.ReactNode {
    const cmd = COMMANDS[v];

    return cmd ? cmd.output() : `${v} is not a valid command.\nTry running ls.`;
}

export default FakeTerminal;
