import styled from 'styled-components';

export const LogoText = styled.span<{ footer?: boolean }>`
  color: ${({ theme, footer }) => (footer ? '#ffffff' : theme.color.primary)};
  font-weight: 800;
  font-size: ${({ footer }) => (footer ? '0.97rem' : '1.25rem')};
`;

export const Highlight = styled.span`
  background: ${({ theme }) => theme.gradient.linear.success};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // IMPORTANT FOR SAFARI WRAP TEXT
  display: inline-block;
  padding-bottom: 1px;
  // END
  font-weight: 600;
`;

export const Text = styled.span<{
  bold?: boolean;
  fontSize?: string;
  secondary?: boolean;
}>`
  color: ${({ theme, secondary }) =>
    secondary ? theme.color.secondary : theme.color.primary};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 'inherit')};
  font-weight: ${({ bold }) => (bold ? 600 : 500)};
  & > a {
    color: ${({ theme }) => theme.bgColor.primary()};
    text-decoration: none;
  }
`;
