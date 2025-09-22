import './standard-button.css';
import { cn } from '@/app/utils';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 *  Atom for a standard button
 */
export function StandardButton({ children, handleClick, ...rest }: Props) {
  const containerProps = {
    ...rest,
    'data-testid': 'standard-button',
    className: cn('standard-button-container', rest.className),
    onClick: handleClick,
  };

  return <button {...containerProps}>{children}</button>;
}

export default StandardButton;
