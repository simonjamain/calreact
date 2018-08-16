// Run this example by adding <%= javascript_pack_tag 'Hellopack_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hellopack React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hellopack = props => (
  <div>Hellopack {props.name}!</div>
)

Hellopack.defaultProps = {
  name: 'David'
}

Hellopack.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hellopack name="Pack" />,
    document.body.appendChild(document.createElement('div')),
  )
})
