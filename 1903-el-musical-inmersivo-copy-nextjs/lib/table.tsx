import type { ComponentProps, CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TableRow {
  role: "header" | "body" | "category";
  className?: string;
  /** Each column's cell: its component, or null for an empty one. */
  cells: ReactNode[];
}

export interface TableData {
  /** Each column's classes. */
  columns: (string | undefined)[];
  rows: TableRow[];
}

const CELL_CONTENT: CSSProperties = { display: "flex", flexDirection: "column", flex: 1, width: "100%", overflowWrap: "normal" };

/** A table component's root: header rows, then a body per row group. */
export function Table({
  columns = [],
  rows = [],
  headerColumnCount,
  className,
  ...rest
}: Partial<TableData> & { headerColumnCount: number } & ComponentProps<"table">) {
  const row = (r: TableRow, index: number) => {
    const heading = r.role === "category";
    return (
      <tr key={index} className={r.className} data-trow={r.role}>
        {r.cells.map((cell, col) => {
          const header = r.role === "header" || (r.role === "body" && col < headerColumnCount);
          const Cell = header ? "th" : "td";
          return (
            <Cell
              key={col}
              colSpan={heading ? columns.length : undefined}
              scope={header ? (r.role === "header" ? "col" : "row") : undefined}
              className={cn("relume-table-cell", !heading && columns[col])}
            >
              {cell !== null && <div style={CELL_CONTENT}>{cell}</div>}
            </Cell>
          );
        })}
      </tr>
    );
  };
  const header = rows.filter((r) => r.role === "header");
  const bodies: TableRow[][] = [];
  for (const r of rows) {
    if (r.role === "header") continue;
    if (r.role === "category" || bodies.length === 0) bodies.push([r]);
    else bodies[bodies.length - 1]!.push(r);
  }
  return (
    <table className={cn("relume-table", className)} {...rest}>
      <colgroup>
        {columns.map((_, i) => <col key={i} />)}
      </colgroup>
      {header.length > 0 && <thead>{header.map(row)}</thead>}
      {bodies.map((body, i) => (
        <tbody key={i}>{body.map(row)}</tbody>
      ))}
    </table>
  );
}
