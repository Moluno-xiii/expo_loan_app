import { LoanStatus } from "@/types";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ISOToString(ISODate: string): string {
  const date = new Date(ISODate);
  return date.toLocaleString("en-Us", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function formatNumber(numberString: string | number) {
  return new Intl.NumberFormat().format(Number(numberString));
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getIcon(loanStatus: LoanStatus) {
  switch (loanStatus) {
    case "APPROVED":
      return "check-circle";
    case "FLAGGED":
      return "report-problem";
    case "REJECTED":
      return "error";
    default:
      return "pending";
  }
}

export { formatDate, formatNumber, getIcon, ISOToString, isValidEmail };
