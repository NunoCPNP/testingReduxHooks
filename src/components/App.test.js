import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from '../components/App';

import reducer from '../store/reducer';
import { addCount } from '../store/actions';


describe('<App /> unit test', () => {
  const getWrapper = (mockStore = createStore(reducer, { count: 0 })) => mount(
    <Provider store={mockStore}>
      <App/>
    </Provider>
  );

  it('should add to count and display the correct # of counts', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('h3').text()).toEqual('Count: 0');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('h3').text()).toEqual('Count: 1');
  });

  it('should dispatch the correct action on button click', () => {
    const mockStore = createStore(reducer, { count: 0 });
    mockStore.dispatch = jest.fn();

    const wrapper = getWrapper(mockStore);
    wrapper.find('button').simulate('click');
    expect(mockStore.dispatch).toHaveBeenCalledWith(addCount());
  });
});