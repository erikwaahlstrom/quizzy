import styled from "@emotion/styled";

export const Option = styled.div`
  display: inline-block;
  visibility: ${({ hidden }) => (hidden ? "show" : "hidden")};
`;
