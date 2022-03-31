import styled from "styled-components";

const ImpressContainer = styled.div`
  .step {
    opacity: 0.2;
  }

  .active {
    opacity: 1;
    transition: opacity 1s;
    -webkit-transition: opacity 1s;
  }

  .hint {
    display: none;
  }
`;

export default ImpressContainer;