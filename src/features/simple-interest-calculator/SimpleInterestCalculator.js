import { useSelector, useDispatch } from 'react-redux';
import { calculate, selectTotal } from './simpleInterestSlice';
import SimpleInterestForm from './components/SimpleInterestForm';
import './SimpleInterest.css';

export default function SimpleInterestCalculator() {
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();

  const onSubmit = (data) => dispatch(calculate(data));

  return (
    <div id="SimpleInterestCalculator">
      <h1>Simple Interest Calculator</h1>
      <div className="form-block">
        Total:
        {total.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </div>
      <SimpleInterestForm onSubmit={onSubmit} />
    </div>
  );
}
