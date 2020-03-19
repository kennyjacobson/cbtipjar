import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import CardItem from './CardItem'

const getRestaurantsQuery = gql`
  query{
    restaurants(orderBy: order_DESC, where: {status: PUBLISHED})  {
      name
      address
      description
      location{
        latitude
        longitude
      }
      photo {
        url
      }
      paypalAccount
    }
  }
`

const CardContainer = (props) => {
    const { loading, error, data } = useQuery(getRestaurantsQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    return (
        <div className='Card-container' key={props.containerName}>
            {
                data.restaurants.map((restaurant, index) => (
                    <CardItem restaurant={restaurant} key={`${props.containerName}-${index}`} ></CardItem>
                ))
            }

        </div>
    )
}

export default CardContainer