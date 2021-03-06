import React from "react"; import { User } from "src/models/User";
import { lang, Localized } from "src/i18n";
import { useAsync } from "react-async";
import { Table } from "antd";
import { CheckboxProps } from "antd/lib/checkbox";

interface Props {
  value?: User[];
  getUsers: () => Promise<User[]>;
  onChange?: (users: User[]) => void;
  selectionMode?: "multiple" | "single";
  getCheckboxProps?: (user: User) => Partial<CheckboxProps>;
}

const root = lang.components.users;

export const UsersSelectionMenu: React.FC<Props> = (props) => {

  const {
    value = [],
    getUsers,
    onChange = () => { },
    selectionMode = "multiple",
    getCheckboxProps,
  } = props;

  const { data, isPending } = useAsync({ promiseFn: getUsers });

  return (
    <div>
      <Table rowSelection={{
        type: selectionMode === "multiple" ? "checkbox" : "radio",
        selectedRowKeys: value.map((x) => x.id),
        onChange: (e) => onChange(data?.filter((x) => e.includes(x.id)) ?? []),
        getCheckboxProps: getCheckboxProps,
      }} size="small" dataSource={data} loading={isPending} rowKey="id">
        <Table.Column title={<Localized id={root.id} />} dataIndex="id" />
        <Table.Column title={<Localized id={root.name} />} dataIndex="name" />
      </Table>
    </div>
  );
}
