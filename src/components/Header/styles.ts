import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--color-primary);
`
export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button { 
        font-size: 1rem;
        color: var(--color-neutral-100);
        background: var(--color-primary-dark);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        &:hover {
            filter: brightness(0.9);
            transition: filter 0.2s;
        }
    }
`
