import './body-text.css';

import { cn } from '@/app/utils';
import type { CommonProps } from '@/app/types';

export interface Props extends CommonProps {}

/**
 * Atom for standard text copy
 */
export function BodyText({ children, ...rest }: Props) {
  const containerProps = {
    ...rest,
    'data-testid': 'body-text',
    className: cn('body-text', rest.className),
  };
  return <p {...containerProps}>{children}</p>;
}

export default BodyText;
