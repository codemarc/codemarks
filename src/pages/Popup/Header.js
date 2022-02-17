import React from 'react'
import '../../../node_modules/uikit/dist/css/uikit.css'
import IconBar from './IconBar'

export default function Header() {
  return (
    <nav id="header" className="uk-navbar-container uk-navbar-transparent uk-navbar">
      <div className="uk-navbar-left">
        <div className="uk-navbar-item">
          <div id="identity">
            <a href="/" target="_new">CodeMarks</a>
          </div>
        </div>
        <div className="uk-navbar-item midnav navtext"><a href="http://codemarc.net" target="_new">codemarc.net</a></div>
      </div>
      <div className="uk-navbar-right">
        <div className="uk-navbar-item navtext">
          <IconBar />
        </div>
      </div>
    </nav>
  )
}