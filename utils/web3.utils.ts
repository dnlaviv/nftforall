import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
import { AddressZero } from '@ethersproject/constants';
import { getAddress } from '@ethersproject/address';
import { Contract } from '@ethersproject/contracts';

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}

// account is not optional
function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked();
}

// account is optional
function getProviderOrSigner(
  library: Web3Provider,
  account?: string,
): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library;
}

export interface GetContractOptions {
  address: string;
  ABI: any;
  library: Web3Provider;
  account?: string;
}

// account is optional
export function getContract<T extends Contract>({
  ABI,
  account,
  library,
  address,
}: GetContractOptions): T {
  if (!isAddress(address) || address === AddressZero || !library) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new Contract(
    address,
    ABI,
    getProviderOrSigner(library, account) as any,
  ) as T;
}