/**
 * Created by kexiao on 17/1/30.
 */
import React, {PropTypes} from "react";

import MatchList from "../components/MatchList";

import {connect} from "react-redux";

import {bindActionCreators} from "redux";

import * as actions from "../actions";

const MatchListContainer = ({matches, actions}) => {

    return (<MatchList matches={matches} actions={actions}/>)
}

MatchListContainer.propsTypes = {
    matches: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    matches: state.matches
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
export default connect(
    mapStateToProps, mapDispatchToProps
)(MatchListContainer)
