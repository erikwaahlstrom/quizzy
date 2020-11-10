import styled from "@emotion/styled";

export const Button = styled.button`
  width: ${({ small }) => (small ? "50%" : "100%")};
  border: none;
  background-color: ${({ small }) => (small ? "#F67280" : "#165ba9")};
  color: white;
  padding: ${({ small }) => (small ? "8px 16px" : "16px 32px")};
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 1;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
