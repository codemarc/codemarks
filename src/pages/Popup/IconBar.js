import React from 'react'
import pak from '../../../package.json'
import { Icon } from 'uikit-react'

export default function IconBar() {
  return (
    <span id="blkIconBar">
      <a href="/" target="_new" >version {pak.version}</a>
      <Icon href="/" options="refresh" />
      <Icon href="/" options="database" />
      <Icon href="/" options="info" />
      <Icon href="/Settings" options="settings" />
    </span>
  )
}