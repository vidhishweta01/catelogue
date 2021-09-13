import PokeReducer from '../redux/reducers/pokeReducer';

const initialState = {
  items: [],
  loading: false,
  error: '',
};

test('should return object with loading:true', () => {
  const res = PokeReducer(initialState,
    {
      type: 'FetchPokeLoading',
    });
  expect(res).toEqual({ items: [], loading: true, error: '' });
});

test('should return object with error: "error"', () => {
  const res = PokeReducer(initialState,
    {
      type: 'FetchPokeFailure',
      error: 'error',
    });
  expect(res).toEqual({ items: [], loading: false, error: 'error' });
});

test('should return object with items have object', () => {
  const res = PokeReducer(initialState,
    {
      type: 'FetchPokeSuccess',
      payload: { name: 'bulbasaur', url: '/bulbasaur/1' },
    });
  expect(res).toEqual({ items: { name: 'bulbasaur', url: '/bulbasaur/1' }, loading: false, error: '' });
});

test('should return dafault', () => {
  const res = PokeReducer(initialState,
    {
      type: '',
    });
  expect(res).toEqual(initialState);
});
