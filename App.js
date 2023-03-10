import './App.css'
import React, { Component } from 'react'
import Counter from './components/Counter'
import Form from './components/Form'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <RouterProvider router={appRouter} />
      </div>
    )
  }
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Counter />,
  },
  {
    path: '/form',
    element: <Form />,
  },
])

export default App
