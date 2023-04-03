import React, { Component } from 'react'

class Files extends Component {
  render() {
    return (
      <fieldset>
        <legend>Send file</legend>
        <label htmlFor='fileInput'>Select a file:</label>
        <input type='file' id='fileInput' name='fileInput' />
      </fieldset>
    )
  }
}

export default Files