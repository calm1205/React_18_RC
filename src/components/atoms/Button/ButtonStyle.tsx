import styled from 'styled-components';
export const ButtonStyle = styled.button`
  ${({ theme }) => {
    return `
      & {
        border: none;
        border-radius: ${theme.space * 2}px;
        margin: ${theme.spacing()};
        padding: ${theme.space * 1.5}px ${theme.space * 3}px;
        color: ${theme.palette.grey[900]};
        background-color: ${theme.palette.primary.main};
      }
      `;
  }}
`;
