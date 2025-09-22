import './hero-header.css';

import { Row } from '@/app/components/common';
import { useConstants } from '@/app/hooks';

export interface Props {}

/**
 * Organism for the hero header section
 */
export function HeroHeader({ ...rest }: Props) {
  const { appName } = useConstants();

  return (
    <header {...rest} className="hero-header" data-testid="hero-header">
      <Row>
        <h1>{appName}</h1>
      </Row>
    </header>
  );
}

export default HeroHeader;
