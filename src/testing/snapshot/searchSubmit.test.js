import renderer from 'react-test-renderer';
import SearchForm from '../../component/search/searchSubmit';

it('it matches the snapshot', () => {
    const searchForm = renderer.create(SearchForm).toJSON();
    expect(searchForm).toMatchSnapshot();
});