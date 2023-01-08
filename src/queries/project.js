/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_PROJECT = gql`
  query project($id: ID!) {
    project(id: $id) {
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
  }
`;

export { GET_PROJECT };
