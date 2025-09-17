import { render, act } from '@testing-library/react';

import TestComponent from './layout';

const componentType = 'app';
const componentName = 'layout';

describe(componentType, () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe(componentName, () => {
    const props = { children: <div>Mock Child</div> };

    it('renders without crashing', async () => {
      render(<TestComponent {...props} />);
    });
  });
});
