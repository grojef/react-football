/**
 * Created by kexiao on 17/1/25.
 */

import React from 'react'

import SelectItem from './SelectItem'


export default class MatchItem extends React.PureComponent {


    render() {
        const {matchName, endSaleTimeStr, homeTeam, matchNo, guestTeam,spfopen, rspfopen,concede,'spf-sp':spf,'xspf-sp':rspf} = this.props;
        return (
            <li >
                <div className="match_bd">
                    <div className="game_box">
                        <div className="game_tit tac">
                            <div className="game_tit_con gray">
                                <p>{matchName}</p>
                                <p>{endSaleTimeStr}</p>
                                <p className="mt10">
                                    <i className="iconfont fs30 pink">&#xe618;</i>
                                </p>
                            </div>
                        </div>
                        <div className="game_bd">
                            <table className="ft_tb" width="100%">
                                <thead>
                                <tr>
                                    <td className="center">
                                        <a className="games_nums" href="javascript:;">{matchNo}</a>
                                    </td>
                                    <td className="center"><span className="fs10">{homeTeam}</span></td>
                                    <td className="center"><span className="gray">VS</span></td>
                                    <td className="center"><span className="">{guestTeam}</span></td>
                                </tr>
                                </thead>
                                <tbody>
                                {spfopen?(<SelectItem sp={spf}/>):null}
                                {rspfopen?(<SelectItem sp={rspf} concede={concede}/>):null}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}