import React from 'react';
import styled from 'styled-components';

const StyledHyperlink = styled.a`
    border-bottom: 3px solid #3f51b5;
    &:hover {
        border-bottom: 5px solid #3f51b5;
    }
`;

export function HyperLink(props) {
    const { href, children } = props;
    return (
        <StyledHyperlink href={href} target={'_blank'}>{children}</StyledHyperlink>
    );
}

export default HyperLink;

