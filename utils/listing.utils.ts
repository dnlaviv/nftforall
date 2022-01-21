// Generic listing interfaces
import { BigNumber, ContractReceipt, ContractTransaction } from 'ethers';
import { SVGComponent } from '../nftforall-env';

export interface Type {
  key: string;
  name?: string;
  value?: any;
}

export interface Option {
  id: string;
  name: string;
  icon?: SVGComponent;
  value?: any;
}

export interface BaseMap<V = any> {
  [key: string]: V;
}

export type ValueOf<T> = T[keyof T];

export interface AsyncReadState<Data = BigNumber> {
  data: Data | null;
  error: any;
  loading: boolean;
}

export interface AsyncWriteState {
  error: any;
  pending: boolean;
  receipt: ContractReceipt | null;
  transaction: ContractTransaction | null;
}

export const listToOptions = <T = Option>(array: T[], key: string): T[] =>
  array.reduce((options, item) => {
    options.push({
      id: item[key as keyof T],
      ...item,
    });
    return options;
  }, [] as T[]);

export const typesToOptions = <T = BaseMap<Type>>(types: T) => {
  return Object.keys(types).reduce((acc, typeKey) => {
    const { key, ...rest } = types[typeKey as keyof T] as unknown as Type;
    acc.push({ id: key, ...rest } as unknown as T[keyof T]);
    return acc;
  }, [] as T[keyof T][]);
};
