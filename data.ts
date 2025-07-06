import { LoanType, Tab } from "./types";

const loanData: LoanType[] = [
  {
    amount: 2000,
    status: "APPROVED",
    date: "2025-07-05T17:52:23.300Z",
    id: "1",
    purpose: "cleaning",
  },
  {
    amount: 4000,
    status: "PENDING",
    date: "2025-04-05T17:52:23.300Z",
    id: "2",
    purpose: "gaming",
  },
  {
    amount: 12000,
    status: "FLAGGED",
    date: "2025-04-05T17:52:23.300Z",
    id: "3",
    purpose: "gaming",
  },
  {
    amount: 7000,
    status: "REJECTED",
    date: "2025-02-05T17:52:23.300Z",
    id: "4",
    purpose: "eating",
  },
  {
    amount: 6000,
    status: "APPROVED",
    date: "2025-07-05T17:52:23.300Z",
    id: "5",
    purpose: "groceries",
  },
  {
    amount: 4000,
    status: "PENDING",
    date: "2025-04-05T17:52:23.300Z",
    id: "6",
    purpose: "outing",
  },
  {
    amount: 12000,
    status: "FLAGGED",
    date: "2025-04-05T17:52:23.300Z",
    id: "7",
    purpose: "school fees",
  },
  {
    amount: 7000,
    status: "REJECTED",
    date: "2025-02-05T17:52:23.300Z",
    id: "8",
    purpose: "eating",
  },
];

const tabs: Tab[] = [
  { title: "current loans", id: "currentLoans", icon: "price-check" },
  { title: "past loans", id: "pastLoans", icon: "paid" },
];

export { loanData, tabs };
