import React, { useEffect } from 'react';
import { ModalProps, Stack } from 'react-bootstrap';
import { injected } from '../../core/connectors';
import { useWeb3React } from '@web3-react/core';
import { usePrevious } from '../../features/web3/hooks/helpers/usePrevious';
import { Modal, ModalItem } from '../styled/Modal.styled';
import IconMetamask from '../../public/images/icons/icon-metamask.svg';

export const WalletModal: React.FC<ModalProps> = ({ show, onHide }) => {
  // important that these are destructed from the account-specific web3-react context
  const { active, connector, error, activate } = useWeb3React();

  // closing wallet modal when a connection is successful
  const activePrevious = usePrevious(active);
  const connectorPrevious = usePrevious(connector);

  useEffect(() => {
    if (
      show &&
      ((active && !activePrevious) ||
        (connector && connector !== connectorPrevious && !error))
    ) {
      // User recently connected,
      // Calling onHide event handler
      onHide && onHide();
    }
  }, [
    show,
    error,
    onHide,
    active,
    connector,
    activePrevious,
    connectorPrevious,
  ]);

  const hasMetamask =
    typeof window !== 'undefined' &&
    !!window.ethereum &&
    !!window.ethereum.isMetaMask;

  const handleOnHide = () => {
    onHide && onHide();
  };

  const handleMetamaskClick = async () => {
    if (hasMetamask) {
      // user has metamask installed, connecting.
      await activate(injected);
    } else {
      // opening MetaMask install page
      window.open('https://metamask.io/', '_blank');
    }
  };

  return (
    <Modal title="Connect Wallet" show={show} onHide={handleOnHide}>
      <Stack gap={3}>
        <ModalItem icon={() => <IconMetamask />} onClick={handleMetamaskClick}>
          {!hasMetamask && 'Install'} MetaMask
        </ModalItem>
      </Stack>
    </Modal>
  );
};
