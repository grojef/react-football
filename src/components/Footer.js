/**
 * Created by kexiao on 17/1/25.
 */

import React, {PureComponent} from "react";
import Notification from 'rc-notification';
import {browserHistory} from 'react-router'

let notification;

const getNotification=(props)=>{
   return  notification = notification ||  Notification.newInstance({props});
}


export default class Footer extends PureComponent {


    onCheck() {
        let matches = this.props.matches;
        let matchCount =matches.filter((match) => {
            return Object.values(match.comment).filter(value => value === true).length > 0
        }).length;
        if(matchCount !=2){
            getNotification().notice({
                content:<div className="r-message"><span><p className="r-message-notice">请选择2场比赛</p></span></div>,
            });
        }else{
            browserHistory.push('/bet')
        }

    }

    render() {

        return (<div className="pick-area">
            <div className="pick-toolbar">
                <div className="pick-bets-con">
                    <p className="c666 fs24">开奖结果不包含加时赛及点球大战</p>
                </div>
                <div className="tc-btn-group">
                    <a className="tc-btn tc-btn-info fs24">重置
                    </a>
                    <a className="tc-btn tc-btn-large tc-btn-primary" onClick={() => this.onCheck()}>请选择</a>
                </div>
            </div>
        </div>)
    }
}
