export const formatCurrency = (amount: number) => {
  return `$${amount.toFixed(2)}`;
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const isDueSoon = (dueDate: string) => {
  const today = new Date();
  const due = new Date(dueDate);
  const diff = (due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
  return diff <= 3 && diff >= 0;
};


