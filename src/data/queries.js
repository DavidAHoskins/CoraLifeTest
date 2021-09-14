import {gql} from '@apollo/client';
/*TODO TASK 05*/
export const GET_PARTICIPANTS = gql`
  query Characters {
    characters {
      
      results {
        species
        status
        gender
        name
        image
        origin {
          name
        }
      }
    }
  }
`;
