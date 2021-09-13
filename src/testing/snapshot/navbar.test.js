import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../../component/Navbar';

describe('Navbar component', () => {
  it('matches the snapshot', () => {
    const navbar = renderer.create(<BrowserRouter><Navbar /></BrowserRouter>).toJSON();
    expect(navbar).toMatchSnapshot();
  });
});
