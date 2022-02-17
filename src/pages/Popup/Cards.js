import React from 'react'
import '../../../node_modules/uikit/dist/css/uikit.css'
import { Card, CardHeader, CardTitle, CardBody } from 'uikit-react'
import { Grid, Section, Link } from 'uikit-react'

import { default as data } from './Data'

const getTitle = (item) => (item.hasOwnProperty('href')) ? <Link href={item.href}>{item.section}</Link> : item.section

const getItemLink = (o, ndx) => {
  // console.dir(o)
  const isMT = o.name === ''
  const isHT = (o.name === '-' || o.label === '-') ? <hr /> : o.label

  return (
    <dd key={ndx}>
      {
        isMT ? (<br />) : (
          <span>
            <a href={o.href} title={o.hint} target="_new">{o.name}</a>
            {o.label2}
            <a href={o.href2} title={o.hint2} target="_new">{o.name2}</a>
            {o.label3}
            <a href={o.href3} title={o.hint3} target="_new">{o.name3}</a>
            {o.label4}
            <a href={o.href4} title={o.hint4} target="_new">{o.name4}</a>
          </span>
        )
      }
    </dd>
  )
}

const getBody = (item, ndx) => {
  return (<dl className="sitelinks">{item.links.map(getItemLink)}</dl>)
}

export default function Cards() {
  return (
    <Grid id="bookmarks" gutter="medium" matched className="uk-child-width-1-4">
      {
        data.map((item, ndx) => (
          <Section key={ndx} >
            <Card>
              <CardHeader className="ul-card">
                <CardTitle>{getTitle(item)}</CardTitle>
              </CardHeader>
              <CardBody>{getBody(item)}</CardBody>
            </Card>
          </Section>
        ))
      }
    </Grid>
  )
}