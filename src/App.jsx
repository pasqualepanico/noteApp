const Note = ({n}) => {
	console.log(n)
	return(
		<li>{n.content}</li>
	)
}
const App = ({notes}) => {

  return (
    <div>
		<h1>Notes</h1>
		<ul>
		   { notes.map( function(n) {
			  console.log ('checking inside map', n)
		   return <Note key={n.id} n={n} />} )}
		</ul>
    </div>
  )
}

export default App