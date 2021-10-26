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
export const createCate = /* GraphQL */ `
  mutation CreateCate(
    $input: CreateCateInput!
    $condition: ModelCateConditionInput
  ) {
    createCate(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateCate = /* GraphQL */ `
  mutation UpdateCate(
    $input: UpdateCateInput!
    $condition: ModelCateConditionInput
  ) {
    updateCate(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteCate = /* GraphQL */ `
  mutation DeleteCate(
    $input: DeleteCateInput!
    $condition: ModelCateConditionInput
  ) {
    deleteCate(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
