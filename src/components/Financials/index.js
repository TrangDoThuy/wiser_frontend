/**
 *
 * Financials
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
function Financials({
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
      <li className="column informations-card">
        <InvestmentTerms
          investmentTerms={investment_terms.filter((item, index) => index < 8)}
        />
      </li>
      <li className="column informations-card">
        <InvestmentTerms
          investmentTerms={investment_terms.filter((item, index) => index >= 8)}
        />
      </li>
    </Grid>
  );
}

Financials.defaultProps = {
  project: projectDefaultShape,
};

Financials.propTypes = {
  ...projectShape,
};

export default Financials;
