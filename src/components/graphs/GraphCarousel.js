import React from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';

const getOrder = ({ index, pos, numItems }) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};
const initialState = { pos: 0, sliding: false, dir: 'RIGHT' };

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  box-shadow: 5px 5px 20px 7px rgba(168, 168, 168, 1);
`;

const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 100%;
  margin-right: 0px;
  order: ${props => props.order};
`;

const CarouselContainer = styled.div`
  display: flex;
  transition: ${props => (props.sliding ? 'none' : 'transform 1s ease')};
  transform: ${props => {
    if (!props.sliding) return 'translateX(calc(-100%))';
    if (props.dir === 'LEFT') return 'translateX(calc(2 * (-100%)))';
    return 'translateX(0%)';
  }};
`;

function reducer(state, { type, numItems }) {
  switch (type) {
    case 'LEFT':
      return {
        ...state,
        dir: 'LEFT',
        sliding: true,
        pos: state.pos === 0 ? numItems - 1 : state.pos - 1,
      };
    case 'RIGHT':
      return {
        ...state,
        dir: 'RIGHT',
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1,
      };
    case 'STOP':
      return { ...state, sliding: false };
    default:
      return state;
  }
}

const GraphCarousel = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const numItems = React.Children.count(props.children);
  const slide = dir => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: 'STOP' });
    }, 50);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => slide('RIGHT'),
    onSwipedRight: () => slide('LEFT'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  return (
    <div {...handlers}>
      <Wrapper>
        <CarouselContainer dir={state.dir} sliding={state.sliding}>
          {React.Children.map(props.children, (child, index) => (
            <CarouselSlot
              key={index}
              order={getOrder({ index: index, pos: state.pos, numItems })}
            >
              {child}
            </CarouselSlot>
          ))}
        </CarouselContainer>
      </Wrapper>
    </div>
  );
};

export default GraphCarousel;
