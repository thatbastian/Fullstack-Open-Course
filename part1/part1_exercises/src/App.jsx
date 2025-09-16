const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.header}</h1>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>{props.total} {props.totalnumber}</p>
  )
}
    

const App = () => {
  const header = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const total = 'Number of exercises in total'
  const totalnumber = exercises1 + exercises2 + exercises3
  return (
    <div>
      <Header header={header}/>
      <Content />
      <Total total={total} totalnumber={totalnumber}/>
    </div>
  )
}

export default App