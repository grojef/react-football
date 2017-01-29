/**
 * Created by kexiao on 17/1/28.
 */


import React, {PureComponent} from 'react'

import classnames from 'classnames'


export default class ItemTd extends PureComponent {


    state = {status: false}


    selectOption = orgs => {
        this.setState(()=>({status:!orgs}));
    }

    render() {
        let {v, i}=this.props;
        return (<td className="center" onClick={()=>{this.selectOption(this.state.status)}}>
            <div className={classnames('sucs_fail', {select: this.state.status})}><span
                className="name">{i === 0 ? '胜' : i === 1 ? '平' : '胜'}</span> {v}
            </div>
        </td>)
    }
}
