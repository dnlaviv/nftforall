import React from 'react';

declare global {
  interface Window {
    ethereum?: {
      isMetaMask?: true;
      on?: (...args: any[]) => void;
      removeListener?: (...args: any[]) => void;
      autoRefreshOnNetworkChange?: boolean;
    };
    web3?: Record<string, unknown>;
  }
}

export type SVGComponent = React.VFC<React.SVGProps<SVGSVGElement>>;
