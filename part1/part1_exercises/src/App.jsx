const Header = ({course}) => (
  <h1>{course}</h1>
)

const Part = ({part}) => (
  <p>{part.name} {part.exercises}</p>
)

const Content = ({parts}) => (
  <div>
    {parts.map((part, index) => (
      <Part key={index} part={part} />
    ))}
  </div>
)

const Total = ({parts}) => (
  <p>
    Total number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}
  </p>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App