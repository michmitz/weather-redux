import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CityForm from './CityForm';
import { Provider } from 'react-redux';
import store from '../../../store';

describe('CityForm component', () => {
  afterEach(() => cleanup());
  it('renders CityForm', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <CityForm />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});