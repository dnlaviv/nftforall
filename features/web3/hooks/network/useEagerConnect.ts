import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { injected } from '../../../../core/connectors';
import { Web3Provider } from '@ethersproject/providers';

export function useActiveWeb3React() {
  const context = useWeb3React<Web3Provider>();
  const contextNetwork = useWeb3React<Web3Provider>();
  return context.active ? context : contextNetwork;
}

export function useEagerConnect() {
  const { account, activate, active, error } = useWeb3React();
  const [tried, setTried] = useState(false);

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }, []); // intentionally only running on mount (make sure it's only mounted once :))

  // if the web3 worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return { account, activate, active, tried, error };
}
