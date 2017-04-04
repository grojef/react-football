/**
 * Created by kexiao on 17/3/17.
 */
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import Footer from "../components/Footer";
import {browserHistory} from "react-router";

class FooterContainer extends PureComponent {


    handleChange = () => {
       browserHistory.push('/bet')
    }

    render() {
        return(<div>
            <Footer onChange={this.handleChange}/>
        </div>)
    }
}

export default connect()(FooterContainer)

