import React, { Component } from 'react'

class RandomUser extends Component {
  state = {
    user: {
      photo: '',
      name: '',
      email: '',
      age: 0,
    },
    isLoading: true,
  }

  fetchAPI = async () => {
    this.setState(
      { isLoading: true },
      async () => {
        const promise = await fetch('https://api.randomuser.me/');
        const response = await promise.json();
        const { results } = await response;
        const { picture, name, email, dob } = await results[0];
        this.setState({
          user: {
            photo: picture.thumbnail,
            name: `${name.title} ${name.first} ${name.last}`,
            email: email,
            age: dob.age,
          },
          isLoading: false,
        })
      }
    )
  }

  componentDidMount() {
    this.fetchAPI()
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { user } = nextState;
    if (user.age < 50) {
      return true
    };
    return false;
  }

  render() {
    const { user, isLoading } = this.state;
    return (
      <div id='container' className='container'>
        <h1>RandomUser</h1>
        { isLoading || user.age > 50
            ? <h2>Loading...</h2>
            : (
              <div id='userInfo' className='userInfo'>
                <img src={user.photo} alt='user' />
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.age}</p>
              </div>
            )
        }
      </div>
    )
  }
}

export default RandomUser