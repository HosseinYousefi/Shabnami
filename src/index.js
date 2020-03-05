import React from 'react'

import Preview from './Preview'
import iconPath from './shabnami.png'

const id = 'shabnami'
export const order = 10
export const icon = iconPath

export const fn = ({ term, actions, display }) => {
  if (term[term.length - 1] == '!') {
    console.log('yep')
    let q = term.slice(0, -1)
    var search = (q) => {
      let qq = encodeURIComponent(q)
      actions.open(`https://www.merriam-webster.com/dictionary/${qq}`)
      actions.hideWindow()
    }
    display({
      id,
      icon,
      order,
      title: `Definitions for ${q}`,
      onSelect: () => search(q),
      getPreview: () => <Preview query={q}/>
    })
  }
}
