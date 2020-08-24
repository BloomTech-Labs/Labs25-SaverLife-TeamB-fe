import React, { useState, useEffect } from 'react';
import SavingsGraph from './SavingsGraph';
import Budgets from './Budgets';
import ComparedSavings from './ComparedSavings';
import ComparedSpendings from './ComparedSpendings';

function GraphCarousel() {
  // created an index to determine which graph to display, and set a default graph to state
  const [index, setIndex] = useState(0);
  const [graph, setGraph] = useState(<SavingsGraph />);

  // re-render the graph every time the index changes
  useEffect(() => {
    renderGraph();
  }, [index]);

  // modifies the graph state to be correlated to the current index
  const renderGraph = () => {
    if (index === 0) {
      setGraph(<SavingsGraph />);
    } else if (index === 1) {
      setGraph(<Budgets />);
    } else if (index === 2) {
      setGraph(<ComparedSavings />);
    } else if (index === 3) {
      setGraph(<ComparedSpendings />);
    }
  };

  // left and right functions serve to increase or decrease the index, and handle the index from going out of range
  const indexLeft = () => {
    index - 1 < 0 ? setIndex(3) : setIndex(index - 1);
  };
  const indexRight = () => {
    index + 1 > 3 ? setIndex(0) : setIndex(index + 1);
  };

  return (
    <div>
      <button
        onClick={() => {
          indexLeft();
        }}
      >
        {' '}
        &#60;{' '}
      </button>
      {graph}
      <button
        onClick={() => {
          indexRight();
        }}
      >
        &#62;
      </button>
    </div>
  );
}

export default GraphCarousel;
