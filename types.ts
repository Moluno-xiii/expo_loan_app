type TabType = "pastLoans" | "currentLoans";
type LoanStatus = "PENDING" | "APPROVED" | "REJECTED" | "FLAGGED";
interface LoanType {
  amount: number;
  status: LoanStatus;
  date: string;
  id: string;
  purpose: string;
}
interface Tab {
  title: string;
  id: TabType;
  icon: "price-check" | "paid";
}

export type { LoanStatus, LoanType, Tab, TabType };
