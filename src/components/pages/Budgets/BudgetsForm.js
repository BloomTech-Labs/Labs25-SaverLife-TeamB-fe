import React, { useState, useEffect } from 'react';
import { postFutureBudget } from '../../../api';
import { useOktaAuth } from '@okta/okta-react';
import { Button } from '../Nav/styles/NavStyles';
import Nav from '../Nav/Nav';

const initialState = {
  monthly_savings_goal: '',
};
function BudgetsForm(props) {
  const [addedBudget, setAddedBudget] = useState(initialState);
  console.log(addedBudget.monthly_savings_goal);
  const handleChange = e => {
    setAddedBudget({
      ...addedBudget,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = e => {
    postFutureBudget(
      props.url,
      props.authState,
      props.userInfo,
      addedBudget.monthly_savings_goal
    )
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err, 'Failed to submit monthly savings goal'));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Monthly Savings Goal</label>
        <input
          type="text"
          id="savings goal"
          name="monthly_savings_goal"
          value={addedBudget.monthly_savings_goal}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
export default BudgetsForm;
