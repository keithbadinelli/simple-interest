import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SimpleInterestForm from './SimpleInterestForm';

describe('SimpleInterestForm', () => {
  it('should call onSubmit prop when form is submitted', async () => {
    const onSubmit = jest.fn();
    const { getByDisplayValue } = render(
      <SimpleInterestForm onSubmit={onSubmit} />
    );
    userEvent.click(getByDisplayValue('Calculate Total'));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
  });
});
