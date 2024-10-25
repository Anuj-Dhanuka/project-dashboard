import React from "react";
import styled from "styled-components";

//common Utils
import { proposalPageWidth } from "../../../../utils/constants";

const Container = styled.div`
    width: ${proposalPageWidth};
    height: 100vh;
    background-color: #000080;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 16px;
`;

const SectionHeading = styled.h1`
    color: #FFFFFF;
    font-size: 24px;
`;

function CPAgreement() {
    return ( 
        <Container>
            <SectionHeading>Agreement</SectionHeading>
        </Container>
     );
}

export default CPAgreement;