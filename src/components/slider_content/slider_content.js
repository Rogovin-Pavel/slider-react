/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';

const SliderContent = styled.div`
        transform: translate${props => props.direction}(-${props => props.translate}px);
        transition: transform ease-out ${props => props.transition}s;
        height: ${props => props.height};
        width: ${props => props.width};
        background-color: gray;
        display: flex;
        flex-direction: ${props => props.flexDirection};
       `

export { SliderContent };