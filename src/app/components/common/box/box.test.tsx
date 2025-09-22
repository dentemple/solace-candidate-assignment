import { render } from '@testing-library/react';

import TestComponent from './Box.tsx';

const componentName = 'Box';
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
