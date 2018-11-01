import React from 'react';
import { connect } from 'react-redux';
import Template from './Template';

function TemplateContainer({ progress }) {
  return (
    <Template progress={progress} />
  );
}

function mapStateToProps(state) {
  return {
    progress: state.progress,
  };
}

export default connect(mapStateToProps)(TemplateContainer);
