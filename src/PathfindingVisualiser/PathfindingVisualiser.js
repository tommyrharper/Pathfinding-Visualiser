import React, { Component } from 'react'
import Node from './Node/Node'

export default class PathfindingVisualiser extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    return (
      <div>
        <Node></Node>
      </div>
    )
  }
}
