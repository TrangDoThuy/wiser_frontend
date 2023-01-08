/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

const GET_PROJECTS = gql`
  query(
    $limit: Int
    $start: Int
    $sort: String
    $locale: String
    $where: JSON
  ) {
    projects(
      limit: $limit
      start: $start
      sort: $sort
      locale: $locale
      where: $where
    ) {
      id
      description
      location
      cover {
        url
      }
      category {
        name
      }
      name
      locale
      localizations {
        id
        locale
      }

      amount

      remarks {
        phone
        amount
        time
      }

      users_permissions_users {
        id
        username
      }
    }
    projectsConnection(where: $where) {
      aggregate {
        count
      }
    }
    categories {
      id
      name
    }
  }
`;

export { GET_PROJECTS };
