import './page.css';

import { cn } from '@/app/utils';
import type { CommonProps } from '@/app/types';

export interface Props extends CommonProps {
  children?: React.ReactNode;
}

/**
 * Atom for a full page container
 *
 * Should only exist once per render tree
 */
export function Page({ children, ...rest }: Props) {
  const defaultProps = {
    ...rest,
    className: cn('page', rest.className),
    'data-testid': 'page',
  };

  return <main {...defaultProps}>{children}</main>;
}

export default Page;
