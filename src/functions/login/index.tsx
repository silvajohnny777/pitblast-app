import axios from 'axios';

const GRAPHQL_ENDPOINT = 'https://opitdev.foraware.forcit.cloud';

export const login = async (email: string, password: string) => {
  /* eslint-disable no-useless-catch */
  try {
    const response = await axios.post(GRAPHQL_ENDPOINT, {
      query: `
        mutation Login($password: String!, $email: String!) {
          login(password: $password, email: $email) {
            user {
              _id
              type
              firstName
              lastName
              email
              username
              companyName
              companyPosition
              status
            }
          }
        }
      `,
      variables: {
        email,
        password
      }
    });
    if (response.data.errors) {
      throw new Error(response.data.errors[0].message);
    }
    return response.data.data.login.user;
  } catch (error) {
    throw error;
  }
};
