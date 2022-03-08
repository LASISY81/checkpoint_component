import React, { Component } from 'react'

export default class FullName extends Component {
  render() {
    return (
      <div>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nom</label>
                <input type="text" class="form-control" />
                
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Prenom</label>
                <input type="text" class="form-control" />
                
            </div>

            <div class="mb-3">
                <label  class="form-label">Date de naissance</label>
                <input type="date" class="form-control" />
                
            </div>
        </form>
    </div>
    )
  }
}
