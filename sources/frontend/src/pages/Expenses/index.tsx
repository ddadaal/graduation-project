import React from "react";
import { lang } from "src/i18n";
import { DashboardOutlined, TransactionOutlined } from "@ant-design/icons";
import { Scope, isSystemScope, isSocialScope } from "src/models/Scope";
import { indexRoutes, IndexRoute } from "src/pages/common/indexRoutes";

const root = lang.nav.sidenav.expenses;

const routes = [
  {
    path: "overview",
    textId: root.overview,
    Icon: DashboardOutlined,
    checkScope: () => true,
    Component: React.lazy(() => import("./Overview")),
  }, {
    path: "accountTransactions",
    textId: root.accountTransactions,
    Icon: TransactionOutlined,
    checkScope: () => true,
    Component: React.lazy(() => import("./AccountTransactions"))
  }, {
    path: "systemTransactions",
    textId: root.systemTransactions,
    Icon: TransactionOutlined,
    checkScope: (scope: Scope) => isSystemScope(scope),
    Component: React.lazy(() => import("./SystemTransactions"))
  }
] as IndexRoute[];

const IdentityIndexPage = indexRoutes(routes, "/expenses/");

export default IdentityIndexPage;

