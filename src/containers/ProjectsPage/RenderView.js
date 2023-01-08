import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Paging from '../../components/Paging';
import Grid from '../../components/Grid';
import Card from '../../components/Card';
import H1 from '../../components/H1';
import Img from '../../components/Img';

import img from '../../assets/img/not-found-icon-24.jpg';

import AuthContext from '../../context/auth-context';

const RenderView = ({
  onClick,
  onPagingChange,
  projects,
  rest: {
    projectsConnection: {
      aggregate: { count },
    },
  },
  start,
  range,
}) => {
  const renderPagination = () => {
    return (
      <Paging
        onChange={onPagingChange}
        count={count}
        range={range}
        page={start}
      />
    );
  };

  const auth = useContext(AuthContext);
  const { userId } = auth;
  const [found, triggerNotFound] = useState(true);

  const countProject = () => {
    const shownProject = projects.filter(function(project) {
      let isShowing = false;
      if (userId === '22') {
        isShowing = true;

        return true;
      }

      project.users_permissions_users.forEach(investor => {
        isShowing = true;
        return true;
      });

      return true;
    });

    console.log(shownProject.length);

    if (shownProject.length === 0) {
      triggerNotFound(false);
    } else {
      triggerNotFound(true);
    }
    console.log(found);
  };

  useEffect(countProject);

  return (
    <div className="projects-wrapper">
      <H1>The mightiest public companies in Hong Kong</H1>
      <Grid>
        {projects.map(project => (
          <li className="column" key={project.id}>
            <Card key={project.id} project={project} onClick={onClick} />
          </li>
        ))}
      </Grid>
      {count > range && renderPagination()}
      {/* {projects.length < 1 && (
        <div className="ooops-wrapper">
          <div className="ooops-img">
            <Img src={img} alt="oops" />
          </div>
          <p className="ooops-title">Ooops!</p>
          <p className="ooops-text">
            Seems like there are no projects matching those filters.
          </p>
        </div>
      )} */}
      {!found && (
        <div className="ooops-wrapper">
          <div className="ooops-img">
            <Img src={img} alt="oops" />
          </div>
          <p className="ooops-title">Ooops!</p>
          <p className="ooops-text">
            If you are interested to view particular projects, please{' '}
            <Link to="/contact-us"> contact us </Link>
            for recommendations
          </p>
        </div>
      )}
    </div>
  );
};

RenderView.defaultProps = {
  onClick: () => {},
  onPagingChange: () => {},
  range: 0,
  projects: [],
  rest: {},
  start: 0,
};

RenderView.propTypes = {
  onClick: PropTypes.func,
  onPagingChange: PropTypes.func,
  range: PropTypes.number,
  projects: PropTypes.array,
  rest: PropTypes.object,
  start: PropTypes.number,
};

export default RenderView;
