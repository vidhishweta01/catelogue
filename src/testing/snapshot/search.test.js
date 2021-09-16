import renderer from 'react-test-renderer';
import Search from '../../container/search';

it('it matches the snapshot', () => {
  const search = renderer.create(Search).toJSON();
  expect(search).toMatchSnapshot();
});
