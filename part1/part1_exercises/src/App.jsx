const Header = (props) => {
  console.log(props)

  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)

  return (
    <p>{props.partname} {props.partexercises}</p>
  )
}

const Total = (props) => {
  console.log(props)

  return (
    <p>{props.total} {props.totalnumber}</p>
  )
}
    

const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const total = 'Number of exercises in total'
  const totalnumber = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header course={course}/>
      <Content partname={part1.name} partexercises={part1.exercises}/>
      <Content partname={part2.name} partexercises={part2.exercises}/>
      <Content partname={part3.name} partexercises={part3.exercises}/>
      <Total total={total} totalnumber={totalnumber}/>
    </div>
  )
}

export default App