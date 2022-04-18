import styled from 'styled-components';

const Button = styled.button`
  display: ${props => props?.Style?.display || ''};
  position: ${props => props?.Style?.position || ''};
  left: ${props => props?.Style?.left || ''};
  right: ${props => props?.Style?.right || ''};
  top: ${props => props?.Style?.top || ''};
  bottom: ${props => props?.Style?.bottom || ''};
  font-size: ${props => props?.Style?.fontSize || '16px'};
  font-weight: ${props => props?.Style?.fontWeight};
  padding: ${props => props?.Style?.padding};
  margin: ${props => props?.Style?.margin};
  text-decoration: ${props => props?.Style?.textDecoration};
  outline: none;
  color: ${props => props?.Style?.color};
  background: transparent;
  cursor: pointer;
  border: 0;
  transition: 0.3s;
  &:hover {
    font-size: ${props => props?.Style?.Hover?.fontSize};
    transition: 0.3s;
  }
  user-select: none;
`;

export default Button;
