import styled from "@emotion/styled";

export const Option = styled.div`
  display: block;
  visibility: ${({ hidden }) => (hidden ? "show" : "hidden")};
`;
