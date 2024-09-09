import styled from 'styled-components';

// Definindo um componente estilizado usando styled-components
export const CardButtonStyle = styled.button`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  margin-left: 20px;
  color: #333;
`;
export const CarStatus = styled.span`
  background-color: red;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 11px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
