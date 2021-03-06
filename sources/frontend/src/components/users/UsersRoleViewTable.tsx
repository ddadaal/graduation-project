import React, { useMemo } from "react";

import { Table } from "antd";
import { Localized, lang } from "src/i18n";
import { User } from "src/models/User";
import { UserRole } from "src/models/Scope";
import { mergeInformation } from "src/components/users/FullUser";

const { Column } = Table;

interface Props {
  admins: User[];
  members: User[];
}

const root = lang.components.users;

export const UsersRoleViewTable: React.FC<Props> = (props) => {

  const { admins, members } = props;

  const allUsers = useMemo(() => mergeInformation(admins, members), [admins, members]);

  return (
    <Table pagination={{ hideOnSinglePage: true }} dataSource={allUsers} rowKey="id">
      <Column title={<Localized id={root.id} />}
        dataIndex="id" key="id" />
      <Column title={<Localized id={root.name} />}
        dataIndex="name" key="name" />
      <Column title={<Localized id={root.role.title} />}
        dataIndex="role"
        render={(role: UserRole) => (
          <Localized id={root.role[role]} />
        )} />
    </Table>
  )
}
