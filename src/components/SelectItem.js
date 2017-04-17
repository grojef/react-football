/**
 * Created by kexiao on 17/1/28.
 */


import React, {PureComponent} from "react";

import classNames from "classnames";

export default class SelectItem extends PureComponent {

    render() {
        const {sp, concede,addItem,select,gameId} = this.props;
        let [s,p,f] = sp.split('-');
        return (
            <tr>
                <td className="center">{concede ? concede : 0}</td>
                {[[3,'胜',s],[1,'平',p],[0,'负',f]].map((v) => {
                    let [spKey,desc,sv]=v;
                    return (<td className="center" key={spKey} onClick={()=>addItem(spKey)}>
                        <div className={classNames('sucs_fail', {select: select[`${gameId}-${spKey}`]})}>
                            <span className="name">{desc}</span> {sv}
                        </div>
                    </td>)
                })}
            </tr>
        )
    }
}

