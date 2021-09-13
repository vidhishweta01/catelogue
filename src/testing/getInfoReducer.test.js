import getInfoReducer from '../redux/reducers/getInfoReducer';

const initialState = {
  data: {},
  loading: false,
  error: null,
};

test('should return object with loading: true', () => {
  const res = getInfoReducer(initialState,
    {
      type: 'FetchPokeInfoLoading',
    });

  expect(res).toEqual({ data: {}, loading: true, error: null });
});

test('should return object with error: "error"', () => {
  const res = getInfoReducer(initialState,
    {
      type: 'FetchPokeInfoFailure',
      error: 'error',
    });
  expect(res).toEqual({ data: {}, loading: false, error: 'error' });
});

test('should return object with pokemon info data', () => {
  const res = getInfoReducer(initialState,
    {
      type: 'FetchPokeInfoSuccess',
      payload: { id: 0, name: 'bulbasaur' },
      pokemonName: 'bulbasaur',
    });
  expect(res).toEqual({ data: { bulbasaur: { id: 0, name: 'bulbasaur' } }, loading: false, error: null });
});

test('should return default', () => {
  const res = getInfoReducer(initialState,
    {
      type: '',
    });
  expect(res).toEqual(initialState);
});
