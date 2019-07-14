import { keyframes } from 'styled-components';

const pop = scaleSize => keyframes`
  0%: { transform: scale(1) }
  50% { transform: scale(${scaleSize}) }
  100%: { transform: scale(1) }
`;

export default pop;
