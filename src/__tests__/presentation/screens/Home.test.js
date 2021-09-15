import React from 'react';
import {render, act,waitFor} from '@testing-library/react-native';
import Home from '../../../presentation/screens/Home';
import {MockedProvider} from '@apollo/client/testing';
import { GET_PARTICIPANTS } from '../../../data/queries';
import { InMemoryCache } from '@apollo/client';

describe('Home screen', () => {
  it('can list each participant', async () => {
    /*TODO TASK 07*/
    const results = [{name: 'Rick Sanchez'}, {name: 'Morty Smith'}];

    const {getByText} = render(
      <MockedProvider
        mocks={[
          {
            request: {
              query: GET_PARTICIPANTS,
            },
            result: {
              data: {
                characters: {
                  results,
                },
              },
            },
          },
        ]}
        addTypename={false}
        defaultOptions={{
          watchQuery: { fetchPolicy: 'no-cache' },
          query: { fetchPolicy: 'no-cache' },
        }}
        >
        <Home />
      </MockedProvider>,
    );
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    results.forEach(element => {
      expect(getByText(element.name)).toBeDefined();
    });
  });
});
