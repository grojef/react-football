/**
 * Created by kexiao on 17/3/17.
 */
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'
import Footer from "../components/Footer";
import * as actions  from '../actions'

class FooterContainer extends PureComponent {

    render() {
        return(<div>
            <Footer matches={this.props.matches} reSet={this.props.actions.reset}/>
        </div>)
    }
}

const mapStateToProps = state => ({
    matches: state.matches
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(FooterContainer)

