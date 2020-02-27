import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { lang, Localized } from "src/i18n";
import { DomainsTable } from "src/pages/Identity/Account/JoinedDomains/DomainsTable";
import styled from 'styled-components';
import { Button } from "antd";
import { TitleText } from "src/components/pagecomponents/TitleText";
import { TitleBar } from "src/components/pagecomponents/TitleBar";
import { useRefreshToken } from "src/utils/refreshToken";
import { JoinDomainLink } from "src/pages/Identity/Account/JoinedDomains/JoinDomainButton";

const root = lang.identity.account.joinedDomains;


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function JoinedDomainsPage(_: RouteComponentProps) {

  const [token, reload] = useRefreshToken();

  return (
    <div>
      <TitleBar spaceBetween={true}>
        <TitleText><Localized id={root.title} /></TitleText>
        <JoinDomainLink reload={reload} />
      </TitleBar>
      <DomainsTable refreshToken={token} />
    </div>
  );
}

