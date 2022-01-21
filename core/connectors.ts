import { InjectedConnector } from '@web3-react/injected-connector';

// Metamask
export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 1337],
});
