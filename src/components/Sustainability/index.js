/**
 *
 * Sustainability
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
function Sustainability({
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
      <p>***Sustainability display here***</p>
    </Grid>
  );
}

Sustainability.defaultProps = {
  project: projectDefaultShape,
};

Sustainability.propTypes = {
  ...projectShape,
};

export default Sustainability;
