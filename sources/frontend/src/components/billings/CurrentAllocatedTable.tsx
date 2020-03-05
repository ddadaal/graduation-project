import React from "react";
import { Resources } from 'src/models/Resources';
import { Table, Tooltip } from 'antd';
import { Link } from "@reach/router";
import { Localized, lang } from "src/i18n";
import { LocalizedDate } from "src/i18n/LocalizedDate";
import { ResourcesModalLink } from "src/components/resources/ResourcesModalLink";

const root = lang.components.billings.table;

interface AllocatedDataItem {
  subjectId: string;
  subjectName: string;
  resources: Resources;
  amount: number;
  payerId: string;
  payerName: string;
  historyLink: string;
}

interface Props {
  subjectType: "domain" | "project" | "user";
  data: AllocatedDataItem[] | undefined;
  loading?: boolean;
}

export const CurrentAllocatedTable: React.FC<Props> = ({ subjectType, data, loading }) => {
  return (
    <Table dataSource={data} loading={loading} rowKey="subjectName">
      <Table.Column title={<Localized id={root.subjectType[subjectType]} />} dataIndex="subject"
        render={(_, item: AllocatedDataItem) => (
          <Tooltip overlay={item.subjectId}>
            {item.subjectName}
          </Tooltip>
        )} />
      <Table.Column title={<Localized id={root.resources} />} dataIndex="resources"
        render={(resources: Resources) => <ResourcesModalLink resources={resources} />} />
      <Table.Column title={<Localized id={root.amount} />} dataIndex="amount"
        render={(amount: number) => amount.toFixed(2)} />
      <Table.Column title={<Localized id={root.payer} />} dataIndex="payerName"
        render={(_, item: AllocatedDataItem) => <Tooltip overlay={item.payerId}>{item.payerName}</Tooltip>} />
      <Table.Column title={<Localized id={root.nextDue} />} dataIndex="nextDue" render={(date: string) => <LocalizedDate dateTimeString={date} />} />
      <Table.Column title={<Localized id={root.actions} />} dataIndex="subject"
        render={(_, item: AllocatedDataItem) => (
          <Link to={item.historyLink}>
            <Localized id={root.history} />
          </Link>
        )} />
    </Table>
  )
}
