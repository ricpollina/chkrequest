import React, {Component, fragament } from 'react'
import {Header, Footer }  from './Layouts'
import Checks from './Checks'

export default class extends Component {
    render() {
        return <fragament>
        <Header />
        <Checks /> 
        <Footer />
        </fragament>
    }
}