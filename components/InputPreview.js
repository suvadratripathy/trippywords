import React, {Component} from 'react';

export default class InputPreview extends Component {
    render () {
        const {value, onChange} = this.props;
        return (<div>
            <input type='text' value={value} onChange={e => onChange(e.target.value)} />
        </div>);
    }
}
