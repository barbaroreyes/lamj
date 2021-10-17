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
