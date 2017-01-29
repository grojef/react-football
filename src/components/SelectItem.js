/**
 * Created by kexiao on 17/1/28.
 */


import React, {PureComponent} from 'react'

import ItemId from './ItemTd'

export default class SelectItem extends PureComponent {

    render() {

        let {sp,concede} = this.props;

        return (
            <tr>
                <td className="center">{concede? concede:0}</td>
                {sp.split('-').map((v,i)=>(<ItemId key={i} v={v} i={i} />))}
            </tr>
        )
    }
}

