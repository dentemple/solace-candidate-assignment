import { Box, BodyText } from '../../common';
import * as TableParts from './TableParts';
import './table.css';

import { cn, slugify } from '../../../utils';
import type { CommonProps } from '../../../types';

export interface Props extends CommonProps {
  records?: Array<Record<string, any>>;
}

/**
 *  Molecule for displaying tabular data
 *
 * Record header --> Column name
 * Record value  --> Cell content
 */
export function Table({ records, ...rest }: Props) {
  const hasRecords = records && records.length > 0;
  const columnCount = hasRecords ? Object.keys(records[0] || {}).length : 0;

  const containerProps = {
    ...rest,
    className: cn('table-container', rest.className),
    'data-testid': 'table-container',
  };

  const headerProps = {
    records: records || [],
  };

  const withDataProps = {
    records: records || [],
    'aria-label': 'Table data',
    'aria-live': 'polite',
  };

  const withoutDataProps = {
    columnCount,
    'aria-live': 'polite',
  };

  return (
    <Box {...containerProps}>
      <table>
        <TableParts.TableHeader {...headerProps} />

        {hasRecords ? (
          <TableParts.WithData {...withDataProps} />
        ) : (
          <TableParts.WithoutData {...withoutDataProps}>
            <BodyText>No data available</BodyText>
          </TableParts.WithoutData>
        )}
      </table>
    </Box>
  );
}

export default Table;
