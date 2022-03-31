import React, { Component } from 'react'
import * as styles from '../index.css';

export class Layout extends Component {
  render() {
    return (
      <div className={styles.layout}>
          {this.props.children}
      </div>
    )
  }
}

export default Layout