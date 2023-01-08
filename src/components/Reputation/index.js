/**
 *
 * Reputation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';

import { projectDefaultShape, projectShape } from '../../shapes/project';

import H1 from '../H1';
import NotePaper from '../NotePaper';
import InvestmentTerms from '../InvestmentTerms';
import Grid from '../Grid';

// import classes from './index.module.css';

/* eslint-disable camelcase */
function Reputation({
  project: {
    address,
    category,
    // location,
    investment_terms,
    // phone,
    // website,
    // description,
  },
}) {
  return (
    <Grid>
      <p>***Reputation display here***</p>
    </Grid>
  );
}

Reputation.defaultProps = {
  project: projectDefaultShape,
};

Reputation.propTypes = {
  ...projectShape,
};

export default Reputation;
