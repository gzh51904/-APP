import React from 'react';

class random extends React.Component {
    constructor() {
        super();
        this.state = {

        }

    }
    
    render() {
        return (
            <div className="code">
                <input type="text" value="" placeholder="请输入验证码（不区分大小写）" className="input-val"></input>
                <canvas id="canvas" width="100" height="30"></canvas>
                <button class="btn">提交</button>
            </div>
        )

    }
}

export default random;