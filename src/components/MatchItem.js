/**
 * Created by kexiao on 17/1/25.
 */
import React from "react";
import SelectItem from "./SelectItem";


export default class MatchItem extends React.PureComponent {


    componentWillReceiveProps(nextProps) {

    }

    componentWillUpdate() {
        //console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        //console.log('componentDidUpdate');
    }


    renderSelectItem() {
        const {spfopen, rspfopen, concede, 'spf-sp': spf, 'xspf-sp': rspf, id, comment} = this.props.item;

        return (<tbody>
        {
            [[spfopen, 4071, spf,0], [rspfopen, 4076, rspf,concede]].map((c) => {
                let [status, gameId, sp,concede] = c;
                if (status) {
                    return <SelectItem concede={concede} key={`${id}-${gameId}`} select={comment} gameId={gameId}
                                       addItem={(orgs) => (this.props.addItem(id, `${gameId}-${orgs}`))}
                                       sp={sp}/>
                }
            })}
        </tbody>);
    }

    render() {
        const {matchName, endSaleTimeStr, homeTeam, matchNo, guestTeam, id} = this.props.item;
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
                                        <a className="games_nums">{matchNo}</a>
                                    </td>
                                    <td className="center"><span className="fs10">{homeTeam}</span></td>
                                    <td className="center"><span className="gray">VS</span></td>
                                    <td className="center"><span className="">{guestTeam}</span></td>
                                </tr>
                                </thead>
                                {this.renderSelectItem()}
                            </table>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}