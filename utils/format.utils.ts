export const truncateAccount = (account: string) => {
  return account === null
    ? '-'
    : account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : '';
};