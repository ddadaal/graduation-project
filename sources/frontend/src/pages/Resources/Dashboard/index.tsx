import React from "react";
import { RouteComponentProps } from "@reach/router";
import { lang, Localized } from "src/i18n";
import { TitleBar } from "src/components/pagecomponents/TitleBar";
import { TitleText } from "src/components/pagecomponents/TitleText";
import { Limits } from "./Limits";
import { InstanceList } from "./InstanceList";
import { Divider } from "antd";

const root = lang.resources.dashboard;

const DashboardPage: React.FC<RouteComponentProps> = (props) => {
  return (
    <div>
      <TitleBar>
        <TitleText><Localized id={root.title} /></TitleText>
      </TitleBar>
      <Limits />
      <Divider />
      <InstanceList />
    </div>
  )
};

export default DashboardPage;
