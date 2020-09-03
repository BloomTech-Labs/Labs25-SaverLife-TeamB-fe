import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';
import { Select } from 'antd';

const getOrder = ({ index, pos, numItems }) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};
const initialState = { pos: 0, sliding: false, dir: 'RIGHT', dotIndex: 1 };

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
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

const CarouselDots = styled.p`
  font-size: 2.5rem;
  letter-spacing: 0.8rem;
`;

const SelectedDot = styled.span`
  font-size: 3.5rem;
  color: rgb(189, 35, 125);
`;

function reducer(state, { type, numItems }) {
  switch (type) {
    case 'LEFT':
      return {
        ...state,
        dir: 'LEFT',
        sliding: true,
        pos: state.pos === 0 ? numItems - 1 : state.pos - 1,
        dotIndex: state.dotIndex,
      };
    case 'RIGHT':
      return {
        ...state,
        dir: 'RIGHT',
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1,
        dotIndex: state.dotIndex,
      };
    case 'STOP':
      console.log('in stop', state.dotIndex);
      return { ...state, sliding: false };
    default:
      return state;
  }
}

const GraphCarousel = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const numItems = React.Children.count(props.children);
  const [dots, setDots] = useState(
    <CarouselDots>
      {' '}
      • <SelectedDot>•</SelectedDot> • •{' '}
    </CarouselDots>
  );
  const slide = dir => {
    console.log('before dir dispatch', state.dotIndex);
    dispatch({ type: dir, numItems });
    console.log('before timeout', state.dotIndex);
    setTimeout(() => {
      dispatch({ type: 'STOP' });
      console.log('in timeout', state.dotIndex);
    }, 50);
  };

  const colorDot = () => {
    if (state.dotIndex === 0) {
      setDots(
        <CarouselDots>
          {' '}
          <SelectedDot>•</SelectedDot> • • •{' '}
        </CarouselDots>
      );
    } else if (state.dotIndex === 1) {
      setDots(
        <CarouselDots>
          {' '}
          • <SelectedDot>•</SelectedDot> • •{' '}
        </CarouselDots>
      );
    } else if (state.dotIndex === 2) {
      setDots(
        <CarouselDots>
          {' '}
          • • <SelectedDot>•</SelectedDot> •{' '}
        </CarouselDots>
      );
    } else if (state.dotIndex === 3) {
      setDots(
        <CarouselDots>
          {' '}
          • • • <SelectedDot>•</SelectedDot>{' '}
        </CarouselDots>
      );
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      state.dotIndex + 1 > 3
        ? (state.dotIndex = 0)
        : (state.dotIndex = state.dotIndex + 1);
      console.log(state.dotIndex);
      colorDot();
      slide('RIGHT');
    },
    onSwipedRight: () => {
      state.dotIndex - 1 < 0
        ? (state.dotIndex = 3)
        : (state.dotIndex = state.dotIndex - 1);
      console.log(state.dotIndex);
      colorDot();
      slide('LEFT');
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
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
        {dots}
      </Wrapper>
    </div>
  );
};

export default GraphCarousel;
