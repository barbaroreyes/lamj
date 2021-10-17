/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPrendas = /* GraphQL */ `
  mutation CreatePrendas(
    $input: CreatePrendasInput!
    $condition: ModelPrendasConditionInput
  ) {
    createPrendas(input: $input, condition: $condition) {
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
export const updatePrendas = /* GraphQL */ `
  mutation UpdatePrendas(
    $input: UpdatePrendasInput!
    $condition: ModelPrendasConditionInput
  ) {
    updatePrendas(input: $input, condition: $condition) {
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
export const deletePrendas = /* GraphQL */ `
  mutation DeletePrendas(
    $input: DeletePrendasInput!
    $condition: ModelPrendasConditionInput
  ) {
    deletePrendas(input: $input, condition: $condition) {
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
