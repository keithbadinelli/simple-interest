import { useForm } from 'react-hook-form';
import propTypes from 'prop-types';

function SimpleInterestForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="SimpleInterestForm">
      <div className="form-block">
        <label htmlFor="principal">Principal:</label>
        <input
          type="number"
          min={0}
          step="0.01"
          defaultValue={0}
          {...register('principal', { valueAsNumber: true })}
        />
      </div>
      <div className="form-block">
        <label htmlFor="rate">Rate:</label>
        <input
          type="number"
          step="0.001"
          min={0}
          max={1}
          defaultValue={0}
          {...register('rate', { valueAsNumber: true })}
        />
      </div>
      <div className="form-block">
        <label htmlFor="years">Years:</label>
        <input
          type="number"
          min={0}
          defaultValue={0}
          {...register('years', { valueAsNumber: true })}
        />
      </div>
      <div>
        <input type="submit" value="Calculate Total" />
      </div>
    </form>
  );
}

SimpleInterestForm.propTypes = {
  onSubmit: propTypes.func,
};

export default SimpleInterestForm;
