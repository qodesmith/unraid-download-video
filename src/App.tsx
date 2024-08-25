import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Download YouTube Video</h1>
      </header>
      <div style={{display: 'flex', gap: '1em'}}>
        <input
          type="text"
          style={{flexGrow: '1', fontSize: 'inherit', padding: '0 1em'}}
        />
        <button>Download</button>
      </div>
    </>
  )
}

export default App
