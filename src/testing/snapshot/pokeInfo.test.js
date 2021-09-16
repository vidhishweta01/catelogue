import renderer from 'react-test-renderer';
import PokeInfo from '../../container/pokeInfo';

it('it matches the snapshot', () => {
  const pokeInfo = renderer.create(PokeInfo).toJSON();
  expect(pokeInfo).toMatchSnapshot();
});
