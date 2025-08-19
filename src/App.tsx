import './App.css'
import React, { Suspense } from 'react'

// dynamic load a component
// LazyLoad the Component
const ComponentA = React.lazy(() => import('./components/ComponentA'))
const ComponentB = React.lazy(() => import('./components/ComponentB'))

function App() {


  return (
    <div>
      <h1>React Lazy Loading</h1>
      {/* It needs to be loaded within a <Suspense> compoenent
  a fallback component when the component is not loaded yet      */}
      <Suspense fallback={<div><p>Loading Component A</p></div>}>
        <ComponentA />
      </Suspense >
      <Suspense fallback={<div><p>Loading Component B</p></div>}>
        <ComponentB />
      </Suspense>
    </div>
  )
}

export default App
