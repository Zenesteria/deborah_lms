import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface compProps {
  data: any;
  columns:any
  title:string
  cta?:any
}

export default function Table({ data, columns, title, cta }: compProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex-1 rounded-xl p-4 min-w-[330px]">
      <div className="w-full flex justify-between items-center mb-3">
        <h1 className="font-bold">{title}</h1>

        {cta}
      </div>
      <table className="w-full border-spacing-y-5 border-separate">
        <thead
          className="text-left border-b-[0.5px] border-black pb-20"
          style={{ fontSize: "calc(0.5rem + 0.25vw)" }}
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={`${headerGroup.id} ${Math.random()}`}>
              {headerGroup.headers.map((header) => (
                <th key={`${header.id} ${Math.random()}`}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="" style={{ fontSize: "calc(0.5rem + 0.25vw)" }}>
          {table.getRowModel().rows.map((row) => (
            <tr className="bg-white" key={`${row.id} ${Math.random()}`}>
              {row.getVisibleCells().map((cell) => (
                <td className="py-10" key={`${cell.id} ${Math.random()}`}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
