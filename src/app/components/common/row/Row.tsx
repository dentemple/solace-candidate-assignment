import React from 'react';

import * as StyledRow from './StyledRowComponents';
import './row.css';

import { cn } from '@/app/utils';
import type { CommonProps } from '@/app/types';

export interface Props extends CommonProps {
  elements?: Array<React.ReactNode>;
  keep?: boolean;
  label?: string;
  ownColumns?: boolean;
}

/**
 * Molecule for a Flexbox row container.
 *
 * Note: Either pass a single child element via `children` prop, or multiple
 * elements via `elements` prop, but not both as `children` takes precedence.
 *
 * Falsy values will remove the row container unless `keep` is set to true.
 *
 * Set `ownColumns` to let the parent control the column elements.
 */
export function Row({ children, elements, keep = false, label, ownColumns, ...rest }: Props) {
  const defaultProps = {
    ...rest,
    className: cn('row', rest.className),
    'data-testid': label ? `row-${label}` : 'row',
  };

  if (children) {
    return <StyledRow.Container {...defaultProps}>{children}</StyledRow.Container>;
  }

  if (elements) {
    return (
      <StyledRow.Container key={label} {...defaultProps}>
        {elements.map((element, index) =>
          ownColumns ? (
            element
          ) : (
            <span className="col" key={`${label || 'col'}-${index}`} data-testid={`row-${label || 'col'}-${index}`}>
              {element}
            </span>
          ),
        )}
      </StyledRow.Container>
    );
  }

  if (keep) {
    return (
      <StyledRow.Container {...defaultProps} className={cn(defaultProps.className, 'row-empty')}>
        &nbsp;
      </StyledRow.Container>
    );
  }

  return null;
}

export default Row;
