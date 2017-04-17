/**
 * Created by kexiao on 17/1/25.
 */

import React, {PureComponent} from "react";

import MatchItem from "./MatchItem";

class MatchList extends PureComponent {


    componentDidMount() {
        if (this.props.matches.length === 0) {
            this.props.actions.loadMatch();
        }
    }

    render() {

        const {matches,actions} = this.props;
        let filterMatches = matches.filter((match)=>match.completed===false);
        return (<div id="jq_indent">
                <div className="k-tabs bg_f5" style={{top: 0, bottom: 7.7 + 'rem'}}>
                    <div className="all_match_tabs">
                        <div className="all_match">
                            <div className="match_hd bg_ff justify">
                                <p><i className="iconfont gray fs30">&#xe607;</i> 2015-02-09 星期一 {matches.length}场比赛</p>
                                <i className="iconfont gray_er">&#xe604;</i>
                            </div>
                            <ul className="match_list">
                                {filterMatches.map(item => (
                                    <MatchItem {...actions} key={item.id} item={item}/>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MatchList



