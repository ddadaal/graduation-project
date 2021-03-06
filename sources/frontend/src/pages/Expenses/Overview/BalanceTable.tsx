import React from "react";
import { getApiService } from "src/apis";
import { AccountTransactionTable } from "src/components/transactions/AccountTransactionTable";
import { Spin } from "antd";
import { useAsync } from "react-async";
import { TransactionsService } from "src/apis/expenses/TransactionsService";

const service = getApiService(TransactionsService);

const getAccountTransactions = () => service.getAccountTransactions(5).then((x) => x.transactions);

interface Props {
  refreshToken: any;
}

export const BalanceTable: React.FC<Props> = ({ refreshToken }) => {
  const { data, isPending } = useAsync({ promiseFn: getAccountTransactions, watch: refreshToken });

  return <AccountTransactionTable data={data} loading={isPending} />;
}


