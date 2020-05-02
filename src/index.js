import React from 'react'
import styles from './styles.module.css'
import styled from 'styled-components';

const theme = {
  colors: {
    primary: '#51A4FB'
  }
}

const Button = styled.button`
  background: ${theme.colors.primary};
  padding: 1rem 3rem;
  margin: 1rem;
  border-radius: 10rem;
  box-shadow: 1px, 1px, 10px, #333;
  font-size: 1.3rem;
`;

export const ExampleComponent = ({ text }) => {
  return <Button>{text}</Button>
}
