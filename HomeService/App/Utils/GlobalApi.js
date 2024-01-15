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

const getCategories = async()=>{
  const query=gql`
  query getCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result

}

const getBusinessList = async()=>{
  const query=gql`
  query getBusinessList {
    businessLists {
      id
      name
      email
      contactPerson
      address
      about
      images {
        url
      }
      category {
        name
      }
    }
  }
  `

  const result = await request(MASTER_URL, query);
  return result

}


export default {
  getSlider, getCategories, getBusinessList
}
