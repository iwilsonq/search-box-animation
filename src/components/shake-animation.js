import React, {Component} from 'react';
import { headShake } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headShake: {
    animationName: headShake,
    animationDuration: '1s'
  }
});

const makeValidationErrorAnimation = Target => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { startShake: props.shouldShake };
    }

    componentWillReceiveProps(nextProps) {
      this.setState({ startShake: nextProps.shouldShake }, () => {
        setTimeout(() => this.setState({ startShake: false }), 1000);
      });
    }

    render() {
      return (
        <Target {...this.props}
          frameClass={this.state.startShake ? css(styles.headShake) : ''}
        />
      );
    }
  }
};
export default makeValidationErrorAnimation;
