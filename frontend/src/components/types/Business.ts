export interface BusinessType {
  name: string;
  yearEst: number;
  profitLossSummary: number;
  userData: {
    name: string;
    email: string;
  };
  loanAmount: number;
}

export interface BalanceSheetRequestType {
  name: string;
  email: string;
  businessId: string;
}
