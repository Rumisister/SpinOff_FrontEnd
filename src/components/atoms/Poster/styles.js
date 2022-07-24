import styled from 'styled-components';

const Image = styled.img`
  width: ${props => props?.Style?.width || ''};
  height: ${props => props?.Style?.height || ''};
  object-fit: ${props => props?.Style?.objectFit || ''};
  border-radius: ${props => props?.Style?.borderRadius || ''};
  text-indent: ${props => props?.Style?.textIndent || ''};
  border: ${props => props?.Style?.border || ''};
  min-height: ${props => props?.Style?.minHeight || ''};
  max-width: ${props => props?.Style?.maxWidth || ''};
  vertical-align: ${props => props?.Style?.verticalAlign || ''};
  margin: ${props => props?.Style?.margin || ''};
  transform: ${props => props.Style.transform || ''};
  filter: ${props => props?.Style?.filter || ''};
`;

export default Image;
