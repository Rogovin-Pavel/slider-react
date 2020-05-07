/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';

const SliderContent = styled.div`
        transform: translateY(-${props => props.translate}px);
        transition: transform ease-out ${props => props.transition}s;
        height: 100%;
        width: 100%;
        background-color: gray;
        display: flex;
        flex-direction: column;
        align-items: center;`

export { SliderContent };