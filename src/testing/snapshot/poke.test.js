import renderer from 'react-test-renderer';
import Poke from '../../component/poke';

it('it matches the snapshot', () => {
  const poke = renderer.create(Poke).toJSON();
  expect(poke).toMatchSnapshot();
});
