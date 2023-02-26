import React from 'react'
import { useQuery, gql } from '@apollo/client'

const TESTS = gql`
  query GetTests {
    tests {
      title, 
      number, 
      id
    }
  }
`

export default function HomePage() {

  const {loading, error, data} = useQuery(TESTS)
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>


  console.log(data)

  return (
    <div>
      Sara
      { data.map(review => (
        <div key={ review.id } className="review-card">
          <div className="rating">{ review.attributes.number }</div>
          {/* <h2>{ review.title }</h2> */}

          <small>console list</small>

          {/* <p>{ review.attributes.body }</p>
          <a to={`/details/${review.id}`}>Readmore</a> */}
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
