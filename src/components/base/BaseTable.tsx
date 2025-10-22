"use client";

import { ReactNode, RefObject, useRef } from "react";

import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useScrollTable } from "@/hooks/useScrollTable";
import { cn } from "@/lib/utils";

interface Column {
  title: string | ReactNode;
  width: string;
  key: string;
  fixed?: boolean;
  className?: string;
}

export interface BaseTableProps {
  columns: Column[];
  dataTable: Record<string, string | number | ReactNode>[];
  className?: string;
  classNameWrapper?: string;
  classNameTable?: string;
  classNameHeader?: string;
  classNameTableHead?: string;
  classNameTableCell?: string;
  isLoading?: boolean;
  isError?: boolean;
  fixedHeader?: boolean;
}
export function BaseTable({
  columns,
  dataTable,
  className,
  isLoading,
  isError,
  fixedHeader,
  classNameWrapper,
  classNameTable,
  classNameHeader,
  classNameTableHead,
  classNameTableCell,
}: BaseTableProps) {
  const tableRef = useRef<HTMLTableElement | null>(null);
  const { atStart } = useScrollTable(tableRef as RefObject<HTMLTableElement>);

  const getValueWidthLeft = (index: number) => {
    if (index === 0) return 0;
    const newArr = structuredClone(columns);
    return newArr
      .slice(0, index)
      .reduce((acc: number, item: { width: string }) => {
        return acc + parseInt(item.width);
      }, 0);
  };
  const lastFixedIndex = columns.map((c) => c.fixed).lastIndexOf(true);
  const isEmptyDataTable = dataTable && dataTable.length === 0;

  const renderTableBody = () => {
    if (isLoading) {
      return (
        <TableRow className="absolute top-[41px] left-0 h-[calc(100%-41px)] w-full">
          <div className="flex h-full w-full items-center justify-center">
            <Spinner />
          </div>
        </TableRow>
      );
    }
    if (isError) {
      return (
        <TableRow className="absolute top-[41px] left-0 h-[calc(100%-41px)] w-full">
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-lg font-medium text-gray-600"> Data is error</p>
          </div>
        </TableRow>
      );
    }

    if (isEmptyDataTable) {
      return (
        <TableRow className="absolute top-[41px] left-0 h-[calc(100%-41px)] w-full">
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-lg font-medium text-gray-600"> Data is empty</p>
          </div>
        </TableRow>
      );
    }
    return (
      <>
        {dataTable.map((row, i) => (
          <TableRow key={`row-${i}`}>
            {columns.map((item, index) => (
              <TableCell
                key={`tbody-${index}`}
                style={{
                  left: item.fixed
                    ? `${getValueWidthLeft(index)}px`
                    : undefined,
                }}
                className={`${
                  !item.fixed && index < columns.length - 1
                    ? `border-r`
                    : `${index === lastFixedIndex ? "border-r" : ""}`
                } bg-[#ffffff] ${
                  item.fixed
                    ? `sticky z-30 ${
                        index === lastFixedIndex
                          ? `${
                              !atStart
                                ? "after:absolute after:top-0 after:right-[-16px] after:h-full after:w-4 after:bg-gradient-to-l after:from-transparent after:to-gray-200/60 after:content-['']"
                                : ""
                            }`
                          : `before:absolute before:top-0 before:right-0 before:h-full before:w-px before:bg-gray-200 before:content-['']`
                      } `
                    : ""
                } ${classNameTableCell || ""}`}
              >
                {row[item.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </>
    );
  };
  return (
    <div
      className={cn(
        `relative w-full border ${
          isLoading || isError || isEmptyDataTable ? "h-[200px]" : ""
        }`,
        className
      )}
    >
      <Table
        ref={tableRef}
        className={`table-fixed ${classNameTable || ""}`}
        classNameWrapper={`${classNameWrapper || ""} ${
          isLoading || isError || isEmptyDataTable
            ? "!static !overflow-hidden"
            : ""
        }`}
      >
        <TableHeader
          className={`${fixedHeader ? "sticky top-0 z-35" : ""} ${
            classNameHeader || ""
          }`}
        >
          <TableRow>
            {columns.map((item, index) => (
              <TableHead
                style={{
                  left: item.fixed
                    ? `${getValueWidthLeft(index)}px`
                    : undefined,
                  width: item.width,
                }}
                key={`thead-${index}`}
                className={`bg-[#f3f3f3] font-bold ${
                  !item.fixed && index < columns.length - 1
                    ? `border-r`
                    : `${index === lastFixedIndex ? "border-r" : ""}`
                } ${
                  item.fixed
                    ? `sticky z-30 ${
                        index === lastFixedIndex
                          ? `${
                              !atStart
                                ? "after:absolute after:top-0 after:right-[-16px] after:h-full after:w-4 after:bg-gradient-to-l after:from-transparent after:to-gray-200/60 after:content-['']"
                                : ""
                            }`
                          : `before:absolute before:top-0 before:right-0 before:h-full before:w-px before:bg-gray-200 before:content-['']`
                      }`
                    : ""
                } ${item.className || ""}  ${classNameTableHead || ""}`}
              >
                {item.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>{renderTableBody()}</TableBody>
      </Table>
    </div>
  );
}
