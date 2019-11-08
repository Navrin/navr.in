import React from "react";
import { Code, Prompt } from "./FakeTerminal";
import styled from "styled-components";

const SKILLS = `
javascript
⊢  typescript
⊢  react
 ⊢ mobx & redux
 ⊢ css modules & styled components
⊢  webpack
⊢ node
 ⊢ GraphQL APIs
 ⊢ RESTful APIs
 ⊢ postgresql & ORMs
⊢ npm packaging
⊢ exnext
⊢ functional
⊢ html, haml, ejs, pug, handlebars, css, scss, sass, etc.
⋯
python
ruby
⊢ Ruby on Rails
go
rust
docker
⊢ docker compose

[and more]`;

const Backplate = styled.article`
    display: block;
    height: 80vh;
    overflow: scroll;
`;

const Skills = () => {
    return (
        <Backplate>
            <Code>
                <Prompt>$</Prompt> skills <br />
                {SKILLS}
            </Code>
        </Backplate>
    );
};

export default Skills;
