import { render, act } from '@testing-library/react';

import { testUtils } from '../app/utils';
import TestComponent from './layout';

const componentType = 'app';
const componentName = 'layout';

describe(componentType, () => {
  beforeAll(() => testUtils.server.listen());

  afterEach(() => {
    testUtils.server.resetHandlers();
    jest.restoreAllMocks();
  });

  afterAll(() => testUtils.server.close());

  describe(componentName, () => {
    const props = { children: <div>Mock Child</div> };

    it('renders without crashing', async () => {
      testUtils.renderWithProviders(<TestComponent {...props} />);
    });
  });
});
