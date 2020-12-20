import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DayList from './DayList';
import { Provider } from 'react-redux';
import store from '../../../store';

describe('User component', () => {
  afterEach(() => cleanup());
  it('renders DayList', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <DayList />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
