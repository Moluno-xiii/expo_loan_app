import { loanData } from "@/data";
import { LoanType } from "@/types";
import { useEffect, useState } from "react";

const useGetLoans = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<LoanType[]>();

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        setIsLoading(true);
        await Promise.resolve(setTimeout(() => {}, 10000));
        setData(loanData);
      } catch (error) {
        console.error("Error getting loan data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLoans();
  }, []);

  return { isLoading, data };
};

export default useGetLoans;
