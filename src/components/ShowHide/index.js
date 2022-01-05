import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstname: false,
    lastname: false,
  }

  onFirstName = () => {
    this.setState(prevState => ({firstname: !prevState.firstname}))
  }

  onLastName = () => {
    this.setState(prevState => ({lastname: !prevState.lastname}))
  }

  render() {
    const {firstname, lastname} = this.state

    let firstNameContainer
    let lastNameContainer

    if (firstname) {
      const text = 'Joe'
      firstNameContainer = (
        <div className="name-container">
          <p className="name">{text}</p>
        </div>
      )
    }

    if (lastname) {
      const text = 'Jonas'
      lastNameContainer = (
        <div className="name-container">
          <p className="name">{text}</p>
        </div>
      )
    }

    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="main-heading">Show/Hide</h1>
          <div className="button-and-card-container">
            <div className="card">
              <button
                className="show-button"
                type="button"
                onClick={this.onFirstName}
              >
                Show/Hide Firstname
              </button>
              {firstNameContainer}
            </div>
            <div className="card">
              <button
                className="show-button"
                type="button"
                onClick={this.onLastName}
              >
                Show/Hide Lastname
              </button>
              {lastNameContainer}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
