/**
 *
 * CardSection
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import fetch from 'cross-fetch';
import { projectDefaultShape, projectShape } from '../../shapes/project';

import H1 from '../H1';
import H4 from '../H4';
// import Price from '../Price';
// import Rate from '../Rate';

import StyledCardSection from './StyledCardSection';
import classes from './index.module.css';

function CardSection({ project, hasLink, history }) {
  const { id, name, description, category, location } = project;
  const [currentProject, updateProject] = useState(project);

  /* istanbul ignore next */
  // const goToComments = () => {
  //   history.push(`/${id}/comments`);
  //   // history.push(`/comments`);
  //   const element = document.getElementById('tab-content');
  //   element.scrollIntoView({ behavior: 'smooth' });
  // };

  const fetchInvestorsNo = () => {
    const requestBody = {
      query: `query  {
        project(id: ${project.id}) {
          id
          address
          category {
            name
          }
          description
          amount
          location
          cover {
            url
          }
          name

          localizations {
            id
            locale
          }
          investment_terms {
            id
            item
            detail
          }
          phone
    
          remarks {
            id
            phone
            amount
            time
            created_at
            users_permissions_user {
              id
              username
              email
              picture {
                url
              }
            }
          }
    
          users_permissions_users {
            id
            username
          }
    
          website
        }
      }`,
    };
    const url = `http://localhost:1337/graphql`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        updateProject(resData.data.project);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(fetchInvestorsNo);

  return (
    <StyledCardSection className={hasLink && 'banner'}>
      <div className="left-infos">
        {!hasLink ? <H4>{name}</H4> : <H1>{name}</H1>}
        <p className="description" id={classes.subtitle}>
          {category && <span>&nbsp;•&nbsp;{category.name}</span>}
          {/* <span>
            &nbsp;•&nbsp;
            {location.includes('_') ? location.replace('_', '') : location}
          </span> */}
        </p>
        <div className={classes.description}>{description}</div>
        <p />
      </div>
    </StyledCardSection>
  );
}

CardSection.defaultProps = {
  project: projectDefaultShape,
  hasLink: false,
};

CardSection.propTypes = {
  project: PropTypes.shape(projectShape),
  hasLink: PropTypes.bool,
};

export default CardSection;
