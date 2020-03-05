import React, { Fragment, Component } from 'react'
import { Loading, KeyboardNav, KeyboardNavItem } from 'cerebro-ui'
import Preload from './Preload'
import getDefinition from '../define'
import styles from './styles.css'

class Preview extends Component {
  renderDefinitions(definitions) {
    return (
      <div className={styles.wrapper}>
        {
          definitions.map((def, defIdx) => (
            <div key={defIdx}>
              <div className={styles.title}>
                {def['hwi']['hw'].split('*').join('·​')}
              </div>
              <div className={styles.fl}>
                {`(${def['fl']})`}
              </div>
              <div className={styles.wrapper}>
                  <ul className={styles.list}>
                      {
                        def['shortdef'].map((s, sIdx) => (
                          <li key={sIdx}>
                            {s}
                          </li>
                        ))
                      }
                  </ul>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
  render() {
    const { query } = this.props
    return (
      <Preload promise={getDefinition(query)} loader={<Loading />}>
        {(definitions) => this.renderDefinitions(definitions || [])}
      </Preload>
    )
  }
}

export default Preview
