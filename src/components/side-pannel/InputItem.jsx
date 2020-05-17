import React from 'react';
import '../../atomic/atomic.scss'

const InputItem = (props) => {
    
    return (
        <fieldset className="Pos(r) P(0) M(5) Bd(n) Ov(h)">
            <input type={props.type} name={props.name} className="Bxz(bb) W(100p) P(10) Bd(n) Bdrs(0) Bxsh(n) Bdbw(1) Bdbs(s) Bdbc(#dddddd) O(n) Cur(t) Trs(300ms)-ph C(t)-ph C(#a9a9a9)-f-ph Scale(0.6)~label-f Scale(0.6)~label-v" placeholder={props.placeholder} value={props.value} onChange={props.onChange} required/>
            <label className="Pos(a) T(10) Start(10) C(#607d8b) Trfo(0,-150p) Trs(300ms) Pe(n)">{props.title}</label>
        </fieldset>
    )
}

export default InputItem;