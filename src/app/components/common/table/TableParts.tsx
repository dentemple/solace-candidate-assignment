import './table.css';
import { slugify, isPrimitive } from '@/app/utils';

export interface NoDataRowProps {
  children: React.ReactNode;
  columnCount?: number;
}
export function WithoutData({ children, columnCount = 1, ...rest }: NoDataRowProps) {
  return (
    <tbody {...rest}>
      <tr {...rest} className="without-data">
        <td colSpan={columnCount || 1}>{children}</td>
      </tr>
    </tbody>
  );
}

export function WithData({ records, ...rest }: { records: Array<Record<string, any>> }) {
  return (
    <tbody {...rest}>
      {records!.map((record, index) => (
        <tr key={index}>
          {Object.values(record).map((content, index) => {
            const key = isPrimitive(content) ? slugify(String(content)) : `table-value-${index}`;
            return <td key={key}>{content}</td>;
          })}
        </tr>
      ))}
    </tbody>
  );
}

export function TableHeader({ records, ...rest }: { records: Array<Record<string, any>> }) {
  function getColumnNames() {
    return Object.keys(records[0] || {});
  }

  return (
    <thead>
      <tr {...rest}>
        {getColumnNames().map((name) => (
          <th key={slugify(name)}>{name}</th>
        ))}
      </tr>
    </thead>
  );
}
