import React from "react";
import styled from "styled-components";
import { Localized } from "src/i18n";
import { MarginedCard } from "src/components/MarginedCard";
import { StatsCard } from "../StatCard";

interface Props<T> {
  data: T | undefined;
  children: (value: T) => React.ReactNode;
  titleId: string;
}

export function BillingStat<T>({ data, children, titleId }: Props<T>) {
  return (
    <StatsCard data={data} title={<Localized id={titleId} />}>
      {children}
    </StatsCard>
  )
}

