/**
 * Created by kexiao on 17/1/28.
 */


import React, {PureComponent} from "react";

import classNames from "classnames";

export default class SelectItem extends PureComponent {

    formatKey(i){
      return i===0?3:i===1?1:0
    }

    render() {
        const {sp, concede,addItem,select,gameId} = this.props;
        return (
            <tr>
                <td className="center">{concede ? concede : 0}</td>
                {sp.split('-').map((v, i) => {
                    return (<td className="center" key={i} onTouchStart={()=>addItem(this.formatKey(i))}>
                        <div className={classNames('sucs_fail', {select: select[`${gameId}-${this.formatKey(i)}`]})}>
                            <span className="name">{i === 0 ? '胜' : i === 1 ? '平' : '胜'}</span> {v}
                        </div>
                    </td>)
                })}
            </tr>
        )
    }
}

