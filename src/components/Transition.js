import React from 'react';
import propTypes from 'prop-types';
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';

const timeout = 250;
const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
};

class Transition extends React.PureComponent {
  render() {
    const { children, pathname } = this.props;

    return (
      <TransitionGroup>
        <ReactTransition
          key={pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {status => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    );
  }
}

Transition.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(
      propTypes.node.isRequired,
    ).isRequired,
    propTypes.node.isRequired,
    propTypes.object.isRequired,
  ]).isRequired,
  pathname: propTypes.string.isRequired,
};

export default Transition;
