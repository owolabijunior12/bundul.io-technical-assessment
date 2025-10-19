import { useState, useCallback } from 'react';
import { paymentsData } from '@/lib/data/paymentsData';

export function usePayments() {
  const [payments, setPayments] = useState(paymentsData);
  const [refreshing, setRefreshing] = useState(false);

  const refreshData = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setPayments([...paymentsData]);
      setRefreshing(false);
    }, 1000);
  }, []);

  return { payments, refreshing, refreshData };
}
