import reducer, { initialState } from './index';

describe('reducers', () => {
  describe('advocates', () => {
    it('should handle initial state', () => {
      expect(reducer(undefined, { type: 'unknown' })).toEqual({
        ...initialState,
      });
    });
  });
});
