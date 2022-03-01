import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: ${({ type }) => type === 'warning' ? 'orange' : 'green'};
  margin: 0 auto;
  padding: 2rem;
  width: 200px;
`;

export default AppContainer;