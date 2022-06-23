import { gql, useQuery } from '@apollo/client'

type Lesson = {
  id: string
  slug: string
  title: string
  videoId: string
  description: string
  teacher: {
    name: string
    bio: string
    avatarURL: string
  }
}

function App() {
  const QUERY = gql`
    query {
      lessons {
        id
        slug
        title
        videoId
        description
        teacher {
          name
          bio
          avatarURL
        }
      }
    }
  `

  const { data } = useQuery<{ lessons: Lesson[] }>(QUERY)

  return (
    <ul>
      {data?.lessons.map(item => (
        <li key={item.id}>
          <span>{item.title}</span>
          <p>{item.description}</p>
          <div>
            <img src={item.teacher.avatarURL} alt="" />
            <span>{item.teacher.name}</span>
            <p>{item.teacher.bio}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default App
