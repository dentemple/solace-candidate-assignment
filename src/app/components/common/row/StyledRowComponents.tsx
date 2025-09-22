import './row.css';
import type { CommonProps } from '@/app/types';

export interface ContainerProps extends CommonProps {
  children: React.ReactNode;
}
export function Container({ children, ...rest }: ContainerProps) {
  return <div {...rest}>{children}</div>;
}
