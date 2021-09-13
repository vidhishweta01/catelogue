import renderer from 'react-test-renderer';
import SearchResult from '../../component/searchResult/searchResult';

it('it matches the snapshot', () => {
  const serchRes = renderer.create(SearchResult).toJSON();
  expect(serchRes).toMatchSnapshot();
});
