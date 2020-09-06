import React, { Component } from 'react'
import { connect } from 'react-redux'

class OtherPage extends Component {
    constructor(props){
        super(props)
    }

    render () {
        return (<div>hi</div>)
    }
}

const mapStateToProps = state => {
    console.log(state)
}

export default connect(mapStateToProps)(OtherPage);