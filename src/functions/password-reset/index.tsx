import axios from 'axios';

const GRAPHQL_ENDPOINT = 'https://opitdev.foraware.forcit.cloud';

export const passwordReset = async (email: string) => {
  /* eslint-disable no-useless-catch */
  try {
    const response = await axios.post(GRAPHQL_ENDPOINT, {
      query: `
      mutation ForgotPassword($email: String!) {
        forgotPassword(email: $email) {
          message
        }
      }
      `,
      variables: {
        email
      }
    });

    if (response.data.errors) {
      throw new Error(response.data.errors[0].message);
    }

    return response.data.data.forgotPassword.message;
  } catch (error) {
    throw error;
  }
};
