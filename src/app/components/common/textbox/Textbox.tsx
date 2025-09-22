import './textbox.css';

import { cn } from '@/app/utils';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

/**
 * Atom for a standard textbox input
 */
export function Textbox({ ...rest }: Props) {
  const containerProps = {
    style: { border: '1px solid black' },
    ...rest,
    className: cn('textbox', rest.className),
    'data-testid': 'textbox',
  };
  return <input {...containerProps} />;
}

export default Textbox;
