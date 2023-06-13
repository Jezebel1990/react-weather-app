import  { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { fetchWeatherAction } from "./redux/slices/weatherSlices";

const mockStore = configureStore([]);

    describe('weatherSlice', () => {
       let store;
       let wrapper;

        beforeEach(() => {
           store = mockStore({
            state: {
                weather: null,
                loading: false,
                error: null,
            }
           });
           store.dispatch = jest.fn();
           wrapper = shallow(< weatherSlice store={store} />);
        });

        it('dispatches fetchWeatherAction', () => {
            expect(store.dispatch).toHaveBeenCalledWith(fetchWeatherAction());
        });

        it('renders loading state when is loading', ()=>{
            store.addCase().state.loading = true;
            wrapper = shallow(<weatherSlice store={store} />);
            expect(wrapper.find('.loading')).toHaveLength(1);
        });

        it('renders error', () => {
            store.addCase().state.error = 'Error fetching state';
            wrapper = shallow(<weatherSlice store={store} />);
            expect(wrapper.find('.error')).toHaveLength(1);
        });

        it('renders state available', () => {
            store.getState().state.data = {
               state: 'São Paulo',
            };
            wrapper = shallow(<weatherSlice store={store} />);
         expect(wrapper.find('.state').text()).toBe('São Paulo');
        });
      } );

    

