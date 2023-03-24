import React from 'react'
//import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const topLeftMenu = gql`
query get {
  topLeftMenu {
    data {
      id,
      attributes {
				body {
          __typename
        }
        
      }
    }
  }
}
`

export default function Header() {

  const {data} = useQuery(topLeftMenu)

  return (
    <header>
      <div className="site-header">
          {/* <Link to="/"><h1>{data.topLeftMenu.data.attributes.body.__typename}</h1></Link> */}
          <ul class="headWrapper">
            <li>{data.topLeftMenu.data.id}</li>
          </ul>
      </div>

     
    </header>
  )
}
