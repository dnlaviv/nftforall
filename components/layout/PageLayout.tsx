import React from 'react';
import { NextSeo } from 'next-seo';
import { NextSeoProps } from 'next-seo/lib/types';
import { Container, Navbar, Stack } from 'react-bootstrap';
import classnames from 'classnames';
import { truncateAccount } from '../../utils/format.utils';
import { WalletModal } from '../modals/WalletModal';
import { useEagerConnect } from '../../features/web3/hooks/network/useEagerConnect';
import styled  from 'styled-components';
import { useThemeToggle } from '../../features/theme/hooks/useThemeToggle';
import { LogoText } from './Typography';
import { Button } from '../styled/Button.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons/faMoon';
import { ThemeMode } from '../../features/theme/theme.slice';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons/faLightbulb';
import { Footer } from './Footer';
import { useModalSlice } from '../../features/modal/hooks/useModalSlice';
import { Modal } from '../../features/modal/modal.slice';
import IconMetamask from '../../public/images/icons/icon-metamask.svg';

export interface PageLayoutProps {
  seo?: NextSeoProps;
  className?: string;
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.gradient.radial.primary('70% 0%')},
    ${({ theme }) => theme.gradient.radial.secondary('100% 30%')},
    ${({ theme }) => theme.gradient.radial.primary('0% 70%', '0.11')},
    ${({ theme }) => theme.gradient.radial.secondary('30% 100%', '0.14')};
`;

const PageContentWrapper = styled.div`
  min-width: 100vw;

  @media (min-width: 768px) {
    min-width: 0;
    width: 100%;
  }
`;

const PageContent = styled.div<{
  backgroundColor?: string;
  textColor?: string;
}>`
  padding: 0.79rem 0.79rem 1.5rem;
  min-height: calc(
    100vh - ${({ theme }) => theme.measurements.navbarHeight} -
      ${({ theme }) => theme.measurements.footerHeight}
  );
  color: ${({ theme, textColor }) => textColor || theme.overlay.primary};
`;

const StyledNavbar = styled(Navbar)`
  color: ${({ theme }) => theme.color.primary};
  height: ${({ theme }) => theme.measurements.navbarHeight};
`;

export const PageLayout: React.FC<PageLayoutProps> = ({
  seo,
  children,
  className,
}) => {
  const { account } = useEagerConnect();

  const { toggleMode, mode } = useThemeToggle();

  const {
    modals: {
      [Modal.WALLET]: showWalletModal,
    },
    setModal,
  } = useModalSlice();

  const setShowWalletModal = (show: boolean) => setModal(Modal.WALLET, show);

  const handleConnectWalletClick = () => {
    if (!account) {
      // account not connected, opening connect wallet modal
      setShowWalletModal(true);
    }
    // falling through when account is already connected.
  };

  const hideWalletModal = () => {
    setShowWalletModal(false);
  };

  return (
    <>
      {seo && <NextSeo {...seo} />}
      <Wrapper className={classnames('d-flex', className)}>
        <PageContentWrapper>
          <StyledNavbar>
            <Container className="py-3">
              <Stack direction="horizontal" className="">
                <Navbar.Brand className="me-5">
                  <LogoText>NFT FOR ALL</LogoText>
                </Navbar.Brand>
              </Stack>
              <Stack direction="horizontal" gap={2}>
                <Button
                  onClick={toggleMode}
                  connectedOnly={false}
                  minWidth="2.8rem"
                >
                  <FontAwesomeIcon
                    icon={mode === ThemeMode.LIGHT ? faMoon : faLightbulb}
                  />
                </Button>
                <Button
                  onClick={handleConnectWalletClick}
                  connectedOnly={false}
                >
                  {account ? (
                    <>
                      <span>{truncateAccount(account)}</span>
                      <IconMetamask width={20} height={20} />{' '}
                    </>
                  ) : (
                    'Connect Wallet'
                  )}
                </Button>
              </Stack>
            </Container>
          </StyledNavbar>
          <PageContent>
            <Container>{children}</Container>
          </PageContent>
          <Footer />
        </PageContentWrapper>
      </Wrapper>
      <WalletModal show={showWalletModal} onHide={hideWalletModal} />
    </>
  );
};
