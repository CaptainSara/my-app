import React from 'react'
import { useQuery, gql } from '@apollo/client'

const newsContainers = gql`
query get {
  newsContainers {
    data {
      id,
      attributes {
				title
      }
    }
  }
}
`

export default function HomePage() {

  const {  data} = useQuery(newsContainers)

  


  console.log(data)

  return (
    <div>
      Sara
      { data.newsContainers.data.map(nc => (
        <div key={ nc.id } className="review-card">
          
          <h2>{ nc.attributes.title }</h2>

          <small>console list</small>

        </div>
        
        
      ))}
    </div>
  )
}

/* const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const {data: response} = await axios.get('http://localhost:1337/api/tests')
        setData(response)
        console.log(response)
      } catch ( error) {
        console.error(error.message)
      }
      setLoading(false)
    }
    fetchData()
  }, []) */
