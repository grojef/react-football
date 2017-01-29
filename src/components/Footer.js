/**
 * Created by kexiao on 17/1/25.
 */

import React, {PureComponent} from 'react'

export default class Footer extends PureComponent {

    render() {
        return (<div className="pick-area">
            <div className="pick-toolbar">
                <div className="pick-bets-con">
                    <p className="c666 fs24">开奖结果不包含加时赛及点球大战</p>
                </div>
                <div className="tc-btn-group">
                    <a className="tc-btn tc-btn-info fs24">重置
                    </a>
                    <a className="tc-btn tc-btn-large tc-btn-primary">请选择</a>
                </div>
            </div>
        </div>)
    }
}
