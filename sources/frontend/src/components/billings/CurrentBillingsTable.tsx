import React from "react";
import { Resources } from 'src/models/Resources';
import { Table, Tooltip } from 'antd';
import { Link } from "@reach/router";
import { lang, Localized } from "src/i18n";
import { LocalizedDate } from "src/i18n/LocalizedDate";
import { ResourcesModalLink } from "src/components/resources/ResourcesModalLink";
import { BillType, CurrentUsedBilling } from "src/models/Billings";

const root = lang.components.billings;

interface AllocatedDataItem extends CurrentUsedBilling {
  historyLink: string;
  payerId?: string;
  payerName?: string;
}

interface Props {
  subjectType: "domain" | "project" | "user";
  type: BillType;
  data: AllocatedDataItem[] | undefined;
  loading?: boolean;
}

export const CurrentBillingsTable: React.FC<Props> = ({ subjectType, type, data, loading }) => {
  return (
    <Table dataSource={data} loading={loading} rowKey="subjectName">
      <Table.Column title={<Localized id={root.subjectType[subjectType]} />} dataIndex="subject"
        render={(_, item: AllocatedDataItem) => (
          <Tooltip overlay={item.subjectId}>
            {item.subjectName}
          </Tooltip>
        )} />
      <Table.Column title={<Localized id={root.table.resources} />} dataIndex="resources"
        render={(resources: Resources) => <ResourcesModalLink resources={resources} />} />
      <Table.Column title={<Localized id={root.table.amount} />} dataIndex="amount"
        render={(amount: number) => amount.toFixed(2)} />
      {type === BillType.Allocated ? (
        <Table.Column title={<Localized id={root.table.payer} />} dataIndex="payerName"
          render={(_, item: AllocatedDataItem) => <Tooltip overlay={item.payerId}>{item.payerName}</Tooltip>} />
      ) : null}
      <Table.Column title={<Localized id={root.table.nextDue} />} dataIndex="nextDue" render={(date: string) => <LocalizedDate dateTimeString={date} />} />
      <Table.Column title={<Localized id={root.table.actions} />} dataIndex="subject"
        render={(_, item: AllocatedDataItem) => (
          <Link to={item.historyLink}>
            <Localized id={root.table.history} />
          </Link>
        )} />
    </Table>
  )
}