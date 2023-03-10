import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      number: '',
      city: '',
      userList: [],
      searchQuery: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
      city: this.state.city,
    }
    const updatedUserList = [...this.state.userList, newUser].sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    this.setState({
      userList: updatedUserList,
      name: '',
      email: '',
      number: '',
      city: '',
    })
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSearchChange(event) {
    const target = event.target
    const value = target.value
    this.setState({
      searchQuery: value,
    })
  }

  render() {
    const filteredUserList = this.state.userList.filter((user) => {
      return user.name
        .toLowerCase()
        .includes(this.state.searchQuery.toLowerCase())
    })

    return (
      <div>
        <h1 className="shadow-lg font-bold text-3xl p-5 m- grid grid-flow-col">
          Form
        </h1>
        <input
          className="search-container p-2 bg-pink-50 my-2 w-56 shadow rounded"
          type="text"
          placeholder="Search users by name"
          value={this.state.searchQuery}
          onChange={this.handleSearchChange}
        />
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Number:
            <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleInputChange}
            />
          </label>
          <button
            className="bg-gray-500 p-2 m-2 rounded-md hover:bg-fuchsia-500 text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
        <ul>
          {filteredUserList.map((user) => (
            <li key={user.email}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Number: {user.number}</p>
              <p>City: {user.city}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Form
