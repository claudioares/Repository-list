import styled from "styled-components";


export const HomePage = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100vh;

    background-color: #0A0C10;
`
export const InputHome = styled.input`
    text-align: center;

    height: 2.8rem;
    width: 30rem;
    padding: 0 1rem;
    margin: 2rem;
    
    color: rgb(63, 56, 56);

    border-radius: 0.5rem;
    border: none;
    border-style: none;

    font-size: 1.5rem;
`
export const DivError = styled.div`
    position: absolute;
`