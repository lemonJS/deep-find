import { deepfind } from '../src/deepfind';

describe('deepfind', () => {
  describe('when there are no results', () => {
    const fixture = {};

    it('returns an empty set of results', () => {
      expect(deepfind(fixture, 'key')).toEqual([]);
    });
  });

  describe('when there is a single flat result', () => {
    const fixture = { key: 'value' };

    it('returns the single value', () => {
      expect(deepfind(fixture, 'key')).toEqual(['value']);
    });
  });

  describe('when there are multiple nested keys', () => {
    const fixture = {
      key1: {
        key: 'value1'
      },
      key2: {
        key: 'value2'
      },
      key3: {
        key: 'value3'
      }
    };

    it('returns a list of values', () => {
      expect(deepfind(fixture, 'key')).toEqual(['value1', 'value2', 'value3']);
    });
  });

  describe('when there is a key nested deeply', () => {
    const fixture = {
      key1: {
        key2: {
          key3: {
            key: 'value'
          }
        }
      }
    };

    it('returns the value', () => {
      expect(deepfind(fixture, 'key')).toEqual(['value']);
    });
  });
});
