import React from "react";
import { lang } from "src/i18n";
import { UserOutlined, ProjectOutlined, TeamOutlined, BankOutlined, FormOutlined } from "@ant-design/icons";
import { Scope, isSystemScope } from "src/models/Scope";
import { indexRoutes, IndexRoute } from "src/pages/common/indexRoutes";

const root = lang.identity.sidebar;

const routes = [
  {
    path: "account",
    textId: root.account.root,
    Icon: UserOutlined,
    match: (path: string) => path.startsWith("/identity/account"),
    children: [
      {
        path: "basic",
        textId: root.account.basic,
        match: (path: string) => path === "/identity/account/basic",
        Icon: FormOutlined,
        checkScope: () => true,
        Component: React.lazy(() => import("./Account/BasicInformation")),
      }, {
        path: "joinedDomains",
        textId: root.account.domains,
        match: (path: string) => path === "/identity/account/joinedDomains",
        Icon: BankOutlined,
        checkScope: (scope: Scope) => !isSystemScope(scope),
        Component: React.lazy(() => import("./Account/JoinedDomains")),
      }
    ],
    checkScope: () => true,
    Component: React.lazy(() => import("./Account"))
  }, {
    path: "domains",
    textId: root.domains,
    Icon: BankOutlined,
    match: (path: string) => path === "/identity/domains",
    checkScope: (scope: Scope) => isSystemScope(scope),
    Component: React.lazy(() => import("./Domains"))
  }, {
    path: "projects",
    textId: root.projects,
    Icon: ProjectOutlined,
    match: (path: string) => path === "/identity/projects",
    checkScope: (scope: Scope) => !isSystemScope(scope),
    Component: React.lazy(() => import("./Projects"))
  }, {
    path: "users",
    textId: root.users,
    Icon: TeamOutlined,
    match: (path: string) => path === "/identity/users",
    // domain member (user not in a project) can't enter users
    checkScope: (scope: Scope) => !(!scope.projectId && scope.role === "member"),
    Component: React.lazy(() => import("./Users"))
  },
] as IndexRoute[];

const IdentityIndexPage = indexRoutes(routes, "/identity/");

export default IdentityIndexPage;

