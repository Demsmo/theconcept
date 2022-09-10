import styled from "styled-components";

export const PageContainer = styled.div`
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
    align-items: center;
`;

export const ConceptImgs = styled.img`
    height: 240px;
    position: relative;
    top: 65px;

    @media (max-width: 915px) {
        height: 200px;
    }
`;

export const ConceptH1s = styled.h1`
    font-size: 55px;

    @media (max-width: 915px) {
        font-size: 35px;
        position: relative;
        top: 25px;
    }
`;

export const ConceptDescription = styled.p`
    font-size: 33px;
    margin: 20px;

    @media (max-width: 915px) {
        font-size: 25px;
    }
`