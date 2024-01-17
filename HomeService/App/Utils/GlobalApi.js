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
      about
      address
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

const getBusinessListByCategory = async(category)=>{
  const query=gql`
  query getBusinessList {
    businessLists(where: {category: {name: "`+category+`"}}) {
      id
      name
      email
      contactPerson
      about
      address
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

const createBooking = async(data)=>{
  const mutationQuery=gql`
  mutation createBooking {
    createBooking(
      data: {bookingStatus: Booked,
        date: "`+data.date+`",
        time: "`+data.time+`",
        userEmail: "rika@example.com",
        userName: "Rika Saito",
        note: "`+data.note+`",
        businessList: {connect: {id: "`+data.businessId+`"}}}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }

  }
  `
  const result = await request(MASTER_URL, mutationQuery);
  return result
}

const getUserBookings = async(userEmail)=>{
  const query=gql`
  query getUserbBookings {
    bookings(orderBy: updatedAt_DESC, where: {userEmail: "`+userEmail+`"}) {
      time
      userEmail
      userName
      bookingStatus
      date
      id
      businessList {
        id
        images {
          url
        }
        name
        address
        contactPerson
        email
        about
        category {
          id
          name
        }
      }
    }
  }
  `

  const result = await request(MASTER_URL, query);
  return result
}


export default {
  getSlider,
  getCategories,
  getBusinessList,
  getBusinessListByCategory,
  createBooking,
  getUserBookings
}
