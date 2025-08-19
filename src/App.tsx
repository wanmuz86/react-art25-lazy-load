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
      {/* The <Suspense> is a fallback when the component is not loaded yet
        If it is not within a suspense, it will be empty while loading    */}
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
