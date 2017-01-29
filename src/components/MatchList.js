/**
 * Created by kexiao on 17/1/25.
 */

import React from 'react'

import MatchItem from './MatchItem'

import zc from '../assets/json/zc.json'

export default class Match extends React.PureComponent {
    render() {
        return (<div id="jq_indent">
                <div className="k-tabs bg_f5" style={{top: 0, bottom: 7.7 + 'rem'}}>
                    <div className="all_match_tabs">
                        <div className="all_match">
                            <div className="match_hd bg_ff justify">
                                <p><i className="iconfont gray fs30">&#xe607;</i> 2015-02-09 星期一 {zc.raceList.length}场比赛</p>
                                <i className="iconfont gray_er">&#xe604;</i>
                            </div>
                            <ul className="match_list">
                                {zc.raceList.map(item => (<MatchItem key={item.id} {...item}/>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}


