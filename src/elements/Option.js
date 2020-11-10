import styled from "@emotion/styled";

export const Option = styled.div`
  display: block;
  width: 100%;
  visibility: ${({ hidden }) => (hidden ? "show" : "hidden")};
`;
