"use client";

import { createContext, useContext, type ReactNode } from "react";

/** Options a list passes to everything rendered in its rows. */
type ListRowValues = Record<string, any>;

const ListRowContext = createContext<ListRowValues | undefined>(undefined);

export function ListRow({ values, children }: { values: ListRowValues; children: ReactNode }) {
  return <ListRowContext.Provider value={values}>{children}</ListRowContext.Provider>;
}

export function useListRow(): ListRowValues | undefined {
  return useContext(ListRowContext);
}
