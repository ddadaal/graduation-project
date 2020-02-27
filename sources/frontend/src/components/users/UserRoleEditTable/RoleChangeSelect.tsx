import React, { useState, useCallback } from "react";
import { UserRole } from "src/models/Scope";
import { User } from "src/models/User";
import { useLocalizedNotification } from "src/utils/useLocalizedNotification";
import { notification } from "antd";
import { RoleSelect } from "src/components/users/UserRoleEditTable/RoleSelect";
import { lang } from "src/i18n";

const inProgressKey = "updateRoleInProgress";

const root = lang.components.users.changeRole;
const opResult = lang.components.operationResult;

interface Props {
  initialRole: UserRole;
  onChange: (userId: string, role: UserRole) => Promise<void>;
  user: User;
  disabled: boolean;
}

export const RoleChangeSelect: React.FC<Props> = ({ initialRole, onChange, user, disabled }) => {

  const [role, setRole] = useState(initialRole);
  const [changing, setChanging] = useState(false);

  const [api, contextHolder] = useLocalizedNotification();

  const handleChange = useCallback(async (role: UserRole) => {
    try {
      api.info({ key: inProgressKey, messageId: [opResult.inProgress, [root.opName]] })
      setChanging(true);
      setRole(role);
      await onChange(user.id, role);
      notification.close(inProgressKey);
      api.success({ messageId: [opResult.success, [root.opName]] })
    } catch (e) {
      console.log(e);
      setRole(initialRole);
      api.error({
        messageId: [opResult.fail, [root.opName]],
        descriptionId: root.errors[e.code],
      });
    } finally {
      setChanging(false);
    }
  }, [user]);

  return (
    <>
      {contextHolder}
      <RoleSelect disabled={disabled || changing} value={role} onChange={handleChange} />
    </>
  );


}
