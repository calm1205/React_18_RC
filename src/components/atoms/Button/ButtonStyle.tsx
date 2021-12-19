import styled from 'styled-components';
export const ButtonStyle = styled.button`
  ${({ theme }) => {
    return `
      & {
        border: none;
        border-radius: ${theme.space * 2}px;
        margin: ${theme.spacing()};
        padding: ${theme.spacing()};
        color: ${theme.palette.grey[900]};
        background-color: ${theme.status.danger};
      }
      `;
  }}
`;
