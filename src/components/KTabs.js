/**
 * Created by kexiao on 17/4/16.
 */

import React, {PropTypes, PureComponent} from "react";
import {FormatItem} from '../util/MatchUtil'

export default class KTabs extends PureComponent {

    static propTypes = {
        matches: PropTypes.array.isRequired,

    }

    render() {
        const matches = this.props.matches;
        return (<div className="k-tabs" style={{top: 4.6 + 'rem', bottom: 9.6 + 'rem'}}>
            <ul className="gamesList">
                {
                    matches.map(match => {
                        return (<li className="repeat" key={match.id}>
                            <div className="justify">
                                <div><span className="gray fs24 mr10">{match.matchNo}</span>{match.homeTeam}（主）VS
                                     {match.guestTeam}
                                </div>
                                <a className="red-better fs24" href="javascript:;" onClick={()=>this.props.clearItem(match.id)}>删除</a>
                            </div>
                            <div className="gamesListBox clearfix">
                                <transition-group name="list" tag="p">
                                    {
                                        Object.keys(match.comment).map((item) => {
                                            if (match.comment[item]) {
                                                return (
                                                    <button onClick={()=>this.props.addItem(match.id,item)} key={`${match.id}-${item}`} className="glb_btn">{FormatItem(item)}</button>
                                                )
                                            }
                                        })
                                    }
                                </transition-group>
                            </div>
                        </li>)
                    })
                }

            </ul>
        </div>);
    }
}


