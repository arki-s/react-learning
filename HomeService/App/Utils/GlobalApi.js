import { request, gql } from 'graphql-request'
import { MASTER_URL} from '@env'

const getSlider=async()=>{
  const query = gql`
  query MyQuery {
    sliders {
      id
      name
      image {
        url
      }
    }
  }
`
const result = await request(MASTER_URL, query);
return result
}

export default {
  getSlider
}
