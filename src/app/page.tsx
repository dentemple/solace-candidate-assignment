'use client';

import { Page } from './components/common';
import { AdvocatesTable, HeroHeader } from './components/feature';

export default function Home() {
  const containerProps = {
    className: 'home-page',
    'data-testid': 'home-page',
  };

  return (
    <Page {...containerProps}>
      <HeroHeader />
      <AdvocatesTable />
    </Page>
  );
}
