import { render } from '@testing-library/react';

import TestComponent from './HeroHeader.tsx';

const componentName = 'HeroHeader';
const componentType = 'feature';

describe(componentType, () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe(componentName, () => {
    const props = {};

    it('renders without crashing', async () => {
      render(<TestComponent {...props} />);
    });
  });
});
