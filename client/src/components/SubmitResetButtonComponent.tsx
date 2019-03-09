import React, { Component } from 'react';

export interface SubmitResetButtonComponentProps {
  pristine: boolean,
  submitting: boolean,
  reset: (event) => void
}

class SubmitResetButtonComponent extends Component<SubmitResetButtonComponentProps> {
  render() {
    const { pristine, submitting, reset } = this.props;

    return (
      <div className={'btn-2-container'}>
        <button className={'btn btn-primary btn-1'} type='submit' disabled={pristine || submitting}>
          Submit
        </button>
        <button className={'btn btn-secondary btn-2'} type='button' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    );
  }
}

export default SubmitResetButtonComponent;