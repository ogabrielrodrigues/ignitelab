import { Lesson } from './Lesson'

import { useGetLessonsQuery } from '../graphql/generated'

export function Sidebar() {
  const { data } = useGetLessonsQuery()

  return (
    <aside className="w-[348px] h bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 border-b border-gray-500 block mb-6">Cronograma de Aulas</span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => (
          <Lesson
            title={lesson.title}
            slug={lesson.slug}
            type={lesson.lessonType}
            key={lesson.id}
            availableAt={new Date(lesson.availableAt)}
          />
        ))}
      </div>
    </aside>
  )
}
