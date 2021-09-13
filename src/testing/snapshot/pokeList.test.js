import renderer from 'react-test-renderer';
import PokeList from '../../container/pokelist';

it('it matches the snapshot', () => {
  const pokelist = renderer.create(PokeList).toJSON();
  expect(pokelist).toMatchSnapshot();
});