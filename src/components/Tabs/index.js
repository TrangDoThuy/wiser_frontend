/**
 *
 * Tabs
 *
 */

import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  TabContent,
  Container,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';
import { Form, Col, Row } from 'react-bootstrap';
import classnames from 'classnames';

import fetch from 'cross-fetch';
import StyledTabs from './StyledTabs';
import Financials from '../Financials';
import Reputation from '../Reputation';
import Sustainability from '../Sustainability';

import AuthContext from '../../context/auth-context';

function Tabs({ project, selected, toggleTab, tabs }) {
  const [modal, setModal] = useState(false);
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [time, setTime] = useState('');
  const [currentProject, updateProject] = useState(project);

  const auth = useContext(AuthContext);
  const { userId } = auth;

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  const toggle = () => setModal(!modal);

  const submitHandler = event => {
    setModal(!modal);
    event.preventDefault();

    const requestBody = {
      query: `mutation{
         createRemark(input:{data:{project:"${project.id}",users_permissions_user:"${userId}",phone:"${phone}",amount:"${amount}",time: "${time}"}}){
           remark{
             id
             users_permissions_user{
               username
               email
             }
           }
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
      .catch(err => {
        console.log(err);
      });
  };

  const checkButton = () => {
    const investorsNo = currentProject.remarks.length;
    if (investorsNo >= 5) {
      return false;
    }
    let check = true;
    currentProject.remarks.forEach(function(remark) {
      if (userId === remark.users_permissions_user.id) {
        check = false;
      }
      return check;
    });

    return check;
  };

  const fetchRemark = () => {
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

    checkButton();
  };

  const handlePhoneNumberChange = event => {
    setPhone(event.target.value);
  };

  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  const handleTimeChange = event => {
    setTime(event.target.value);
  };

  const button = checkButton();

  useEffect(fetchRemark);

  return (
    <>
      <StyledTabs />

      <div className="tabs-wrapper">
        <Nav tabs>
          <Container>
            {tabs.map(tab => {
              return (
                <NavItem key={tab}>
                  <NavLink
                    className={classnames({ active: selected === tab })}
                    onClick={() => {
                      toggleTab(tab);
                    }}
                  >
                    <span title={tab}>
                      <p>{tab}</p>
                    </span>
                  </NavLink>
                </NavItem>
              );
            })}
          </Container>
        </Nav>

        <TabContent activeTab={`${selected}`} id="tab-content">
          {tabs.map(tab => {
            return (
              <TabPane tabId={tab} className={`${tab}-pane`} key={tab}>
                <Container>
                  <Row>
                    <Col sm="12">
                      {tab === 'financials' ? (
                        <Financials project={currentProject} />
                      ) : (
                        <p />
                      )}
                      {tab === 'reputation' ? (
                        <Reputation project={currentProject} />
                      ) : (
                        <p />
                      )}
                      {tab === 'sustainability' ? (
                        <Sustainability project={currentProject} />
                      ) : (
                        <p />
                      )}
                      {/* {tab === 'reputation' ? (
                        <Reputation project={currentProject} />
                      ) : (
                        <Financials project={currentProject} />
                      )} */}
                    </Col>
                  </Row>
                </Container>
              </TabPane>
            );
          })}
        </TabContent>
      </div>
    </>
  );
}

Tabs.defaultProps = {
  project: {},
  selected: 'financials',
  toggleTab: () => {},
  tabs: [],
};

Tabs.propTypes = {
  project: PropTypes.object,
  selected: PropTypes.string,
  toggleTab: PropTypes.func,
  tabs: PropTypes.array,
};

export default Tabs;
