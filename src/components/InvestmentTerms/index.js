/**
 *
 * InvestmentTerms
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import H4 from '../H4';
import StyledNotePaper from '../NotePaper/StyledNotePaper';

import classes from './index.module.css';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

function InvestmentTerms({ investmentTerms }) {
  return (
    <StyledNotePaper>
      <ul className="list-group list-group-flush">
        {investmentTerms.map(investmentTerm => (
          <li key={investmentTerm.id} className="list-group-item">
            <Row>
              <Col>
                <p className={classes.item}>{investmentTerm.item}</p>
              </Col>
              <Col>
                <p className={classes.detail}>{investmentTerm.detail}</p>
              </Col>
            </Row>
          </li>
        ))}
      </ul>
    </StyledNotePaper>
  );
}

InvestmentTerms.defaultProps = {
  investmentTerms: [],
};

InvestmentTerms.propTypes = {
  investmentTerms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      item: PropTypes.string.required,
      detail: PropTypes.string,
    }),
  ),
};

export default InvestmentTerms;
