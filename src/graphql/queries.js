/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPrendas = /* GraphQL */ `
  query GetPrendas($id: ID!) {
    getPrendas(id: $id) {
      id
      name
      description
      categoria
      image
      price
      createdAt
      updatedAt
    }
  }
`;
export const listPrendas = /* GraphQL */ `
  query ListPrendas(
    $filter: ModelPrendasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrendas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        categoria
        image
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCate = /* GraphQL */ `
  query GetCate($id: ID!) {
    getCate(id: $id) {
      id
      name
      price
      createdAt
      updatedAt
    }
  }
`;
export const listCates = /* GraphQL */ `
  query ListCates(
    $filter: ModelCateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
