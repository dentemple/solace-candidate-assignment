import { render } from '@testing-library/react';

import TestComponent from './StandardButton.tsx';

const componentName = 'StandardButton';
const componentType = 'common';

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
