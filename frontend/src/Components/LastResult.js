import React from 'react'
import propTypes from 'prop-types'

const LastResult  = ({condition}) =>(
    (condition)?
    <h3 className="text-center">~ end of catalogue ~</h3>:
    null
)
export default LastResult;