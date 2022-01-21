import React from 'react';
import styled from 'styled-components';
import {
  Modal as BootstrapModal,
  ModalProps as BootstrapModalProps,
} from 'react-bootstrap';
import { SVGComponent } from '../../nftforall-env';
import { ThemeMode } from '../../features/theme/theme.slice';
import { useThemeToggle } from '../../features/theme/hooks/useThemeToggle';

export interface ModalProps extends BootstrapModalProps {
  title: string;
}

const StyledModal = styled(BootstrapModal)`
  & .modal-content {
    background-color: ${({ theme }) => theme.bgColor.secondary()};
    border-radius: 1rem;
    border: 0;
  }
  & .btn-close {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const ModalTitle = styled(BootstrapModal.Title)`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  text-align: center;
  width: 100%;
`;

export const ModalItemWrapper = styled.div`
  user-select: none;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background: ${({ theme }) => theme.bgColor.secondary2};
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.bgColor.primary()};
  }
`;

const ClickableModalItemWrapper = styled(ModalItemWrapper)<{ small?: boolean }>`
  transition: ${({ theme }) => theme.transition.fast};
  cursor: pointer;
  color: ${({ small }) => (small ? '#fff' : undefined)};
  background: ${({ theme, small }) =>
    small ? theme.bgColor.primary() : undefined};
  &:hover {
    background: ${({ theme }) => theme.bgColor.primary()};
    color: #fff;
    opacity: ${({ small }) => (small ? 0.9 : 1)};
  }
`;

export const ModalItem: React.FC<{
  icon?: () => JSX.Element | SVGComponent;
  onClick?: () => any;
  small?: boolean;
  disabled?: boolean;
}> = ({ children, onClick, icon: SVGIcon, small, disabled }) => {
  return (
    <ClickableModalItemWrapper
      className={`p-${
        small ? '3' : '4'
      } fw-bold d-flex justify-content-between align-items-center`}
      onClick={!disabled ? onClick : undefined}
      small={small}
    >
      <span>{children}</span>
      {SVGIcon && SVGIcon()}
    </ClickableModalItemWrapper>
  );
};

export const Modal: React.FC<ModalProps> = ({
  title,
  children,
  ...modalProps
}) => {
  const { mode } = useThemeToggle();
  return (
    <StyledModal size="md" centered {...modalProps}>
      <BootstrapModal.Header
        style={{ border: 'none' }}
        closeButton
        closeVariant={mode === ThemeMode.DARK ? 'white' : undefined}
      >
        <ModalTitle>{title}</ModalTitle>
      </BootstrapModal.Header>
      <BootstrapModal.Body>{children}</BootstrapModal.Body>
    </StyledModal>
  );
};
