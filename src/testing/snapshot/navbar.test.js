import renderer from 'react-test-renderer';
import Navbar from '../../component/Navbar';

it('it matches the snapshot', () => {
  const navbar = renderer.create(Navbar).toJSON();
  expect(navbar).toMatchSnapshot();
});