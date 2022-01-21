import React from 'react';
import styled from 'styled-components';
import { Stack } from 'react-bootstrap';

interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  jumbo?: boolean;
  primary?: boolean;
  minWidth?: string;
  inverted?: boolean;
  highlight?: boolean;
  secondary?: boolean;
  capitalize?: boolean;
  connectedOnly?: boolean;
  backgroundColor?: string;
}

const BaseButton = styled.button<BaseButtonProps>`
  user-select: none;
  min-width: ${({ minWidth }) => minWidth || 'auto'};
  min-height: 2.8rem;
  transition: ${({ theme }) => theme.transition.primary};
  text-transform: ${({ capitalize }) => (capitalize ? 'capitalize' : 'none')};
  font-weight: 600;
  padding: ${({ theme, jumbo }) =>
    jumbo ? theme.buttonPadding.primary : theme.buttonPadding.sm};
  letter-spacing: 0.05rem;
  font-size: ${({ theme, jumbo }) =>
    jumbo ? theme.fontSize.primary : theme.fontSize.sm};
  color: ${({ theme, primary, secondary }) =>
    primary
      ? '#ffffff'
      : secondary
      ? theme.bgColor.primary()
      : theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background: ${({ theme, backgroundColor, primary, secondary }) =>
    backgroundColor
      ? backgroundColor
      : primary
      ? theme.bgColor.primary()
      : secondary
      ? 'transparent'
      : theme.bgColor.secondary()};
  border: none;
  box-shadow: ${({ theme, secondary }) =>
    secondary ? `inset 0 0 0 0.15rem ${theme.bgColor.primary()}` : 'none'};
  box-sizing: border-box;
  &:active {
    transform: scale(97%, 97%);
  }

  &:hover {
    opacity: 0.9;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.8rem;
  }
`;

const ButtonInverted = styled(BaseButton)`
  color: ${({ theme }) => theme.bgColor.primary()};
  background: transparent;
`;

const ButtonHighlight = styled(BaseButton)`
  position: relative;
  display: inline-block;

  &::before {
    min-width: ${({ minWidth }) => minWidth || 'auto'};
    transition: ${({ theme }) => theme.transition.primary};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    padding: 2px;
    background: ${({ theme }) => theme.gradient.linear.success} border-box;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: source-out;
    mask-composite: exclude;
  }
`;

export const UploadButton = styled.label`

  & > input[type="file"] {
    display: none;
  }
  user-select: none;
  min-height: 2.8rem;
  transition: ${({ theme }) => theme.transition.primary};
  font-weight: 600;
  padding: ${({ theme }) => theme.buttonPadding.primary};
  letter-spacing: 0.05rem;
  font-size: ${({ theme }) => theme.fontSize.primary};
  color: #ffffff;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background: ${({ theme }) => theme.bgColor.primary()};
  border: none;
  box-shadow: ${({ theme }) => theme.elevation.primary};
  box-sizing: border-box;
  &:active {
    transform: scale(97%, 97%);
  }

  &:hover {
    opacity: 0.9;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.8rem;
  }
`;

export const Button: React.FC<BaseButtonProps> = ({
  children,
  connectedOnly = true,
  ...props
}) => {
  const Btn = props.highlight
    ? ButtonHighlight
    : props.inverted
    ? ButtonInverted
    : BaseButton;

  return (
    <Btn {...props}>
      <Stack
        direction="horizontal"
        gap={2}
        className="justify-content-center align-content-center"
      >
        {children}
      </Stack>
    </Btn>
  );
};
