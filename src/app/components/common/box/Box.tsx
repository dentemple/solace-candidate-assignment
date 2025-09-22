import './box.css';

import { cn } from '@/app/utils';
import type { CommonProps } from '@/app/types';

export interface Props extends CommonProps {}

/**
 * Atom for a generic container
 */
export function Box({ children, ...rest }: Props) {
  const defaultProps = {
    ...rest,
    className: cn('box', rest.className),
    'data-testid': 'box',
  };

  return <div {...defaultProps}>{children}</div>;
}

export default Box;
