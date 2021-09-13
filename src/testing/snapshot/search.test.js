import renderer from 'react-test-renderer';
import Search from '../../component/search';

it('it matches the snapshot', () => {
  const search = renderer.create(Search).toJSON();
  expect(search).toMatchSnapshot();
});
