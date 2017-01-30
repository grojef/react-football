/**
 * Created by kexiao on 17/1/30.
 */
import React, {PropTypes} from 'react'

import MatchList from '../components/MatchList'

import {connect} from 'react-redux'

const MatchListContainer = ({matchs}) => (<MatchList matchs={matchs}/>)

MatchListContainer.propsTypes = {
    matchs: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    matchs: state.matchs
})

export default connect(
    mapStateToProps
)(MatchListContainer)
