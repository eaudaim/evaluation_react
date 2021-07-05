import React from 'react'

import Rule from '../src/Rule'

export default function RuleList(props) {
    const elements = props.rules.map(rule => <Rule key={rule.id} rule={rule} />)

    return (
        <div>{elements}</div>
    )
}