import { Contract } from '@ethersproject/contracts';
import { useActiveWeb3React } from '../network/useEagerConnect';
import { useMemo } from 'react';
import { getContract } from '../../../../utils/web3.utils';
import { YOUGETANFT } from '../../../../core/abis/types/YOUGETANFT';
import YOUGETANFT_ABI from '../../../../core/abis/YOUGETANFT.json';


// returns null on errors
function useContract<T extends any = Contract>(
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true,
): T | null {
  const { library, account } = useActiveWeb3React();

  return useMemo(() => {
    if (!address || !ABI || !library) return null;

    try {
      return getContract({
        address,
        ABI,
        library,
        account: withSignerIfPossible && account ? account : undefined,
      });
    } catch (error) {
      console.error('Failed to get contract', error);
      return null;
    }
  }, [ABI, address, library, withSignerIfPossible, account]) as T;
}

export function useUGETANFTContract() {
  return useContract<YOUGETANFT>('0xF2FF4Cf8931B0A788154F2881047b7566202C598', YOUGETANFT_ABI);
}
