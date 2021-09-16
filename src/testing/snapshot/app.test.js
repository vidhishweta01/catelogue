import renderer from 'react-test-renderer';
import App from '../../component/app/App';

it('it matches the snapshot', () => {
  const app = renderer.create(App).toJSON();
  expect(app).toMatchSnapshot();
});
