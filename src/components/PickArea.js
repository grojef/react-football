/**
 * Created by kexiao on 17/4/16.
 */


import React from 'react';

const PickArea=({betComfirm})=>{

        return (
            <div className="pick-area">
                <div className="pick-toolbar">
                    <div className="pick-bets-con">
                        <p className="c666 fs24">预测奖金：<span className="red">1200.00</span>元 ~ <span className="red">1500.00</span>元
                        </p>
                    </div>
                    <div className="tc-btn-group">
                        <a id="js_bet_mul" href="javascript:void(0);" className="tc-btn tc-btn-info fs24">投1倍</a>
                        <a id="js_bet_mul2" href="javascript:void(0);" className="tc-btn tc-btn-info fs24">2串1</a>
                        <a href="javascript:void(0);" className="tc-btn tc-btn-large tc-btn-primary fs24" onClick={betComfirm}>
                            立即支付2.00元
                        </a>
                    </div>
                    <div className="pick-agree-rule">
                    </div>
                </div>
            </div>
        );
}

export default PickArea;
