import React, { Component } from 'react'

export default class Adress extends Component {
  render() {
    return (
      <div>
        <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Adress</label>
                <input type="text" class="form-control" />
                
            </div>
        
        <button type="submit" class="btn btn-success">Submit</button>
      </div>
    )
  }
}
