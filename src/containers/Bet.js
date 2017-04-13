/**
 * Created by kexiao on 17/3/9.
 */
import React from "react";
const Bet = () => {

    return (
        <div className="slideLeft">
            <div className="bg_f5">
                <div className="tac addGames fs24">
                    <i className="iconfont fs24">&#xe60e;</i> 继续添加比赛（已选择<span className="red" ></span>场赛事）
                </div>
                <div className="k-tabs" style={{top:4.6+'rem',bottom:9.6+'rem'}}>


                    <ul className="gamesList">
                        <li className="repeat" >
                            <div className="justify">
                                <div><span className="gray fs24 mr10"></span>

                                </div>
                                <a className="red-better fs24" href="javascript:;">删除</a>
                            </div>
                            <div className="gamesListBox clearfix">
                                <transition-group name="list" tag="p">
                                    <button className="glb_btn" data-no="170102014-4076-3"></button>
                                </transition-group>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="pick-area">
                <div className="pick-toolbar">
                    <div className="pick-bets-con">
                        <p className="c666 fs24">预测奖金：<span className="red">1200.00</span>元 ~ <span className="red">1500.00</span>元
                        </p>
                    </div>
                    <div className="tc-btn-group">
                        <a id="js_bet_mul" href="javascript:void(0);" className="tc-btn tc-btn-info fs24">投1倍</a>
                        <a id="js_bet_mul2" href="javascript:void(0);" className="tc-btn tc-btn-info fs24">2串1</a>
                        <a href="javascript:void(0);" className="tc-btn tc-btn-large tc-btn-primary fs24">
                            立即支付2.00元
                        </a>
                    </div>
                    <div className="pick-agree-rule">
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Bet;
