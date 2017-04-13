/**
 * Created by kexiao on 17/3/17.
 */
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import Footer from "../components/Footer";

class FooterContainer extends PureComponent {

    render() {
        return(<div>
            <Footer matches={this.props.matches} onChange={this.handleChange}/>
        </div>)
    }
}

const mapStateToProps = state => ({
    matches: state.matches
})
export default connect(mapStateToProps)(FooterContainer)

