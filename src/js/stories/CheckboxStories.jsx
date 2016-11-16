/**
 * Created by cmeyers on 11/14/16.
 */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Checkbox } from '../components/forms/Checkbox';

storiesOf('Checkbox', module)
    .add('default', () => <Default />)
    .add('sizes', () => <Sizes />)
    .add('callbacks', () => <Callbacks />)
;

const style = {padding: 10};

function Default() {
    return (
        <div>
            <div style={style}>
                <Checkbox label="Unchecked" />
            </div>
            <div style={style}>
                <Checkbox checked label="Checked" />
            </div>
        </div>
    );
}

function Sizes() {
    return (
        <div>
            <div style={style}>
                <Checkbox label="With no layout" />
            </div>
            <div className="layout-small" style={style}>
                <Checkbox label="Using layout-small" />
            </div>
            <div className="layout-medium" style={style}>
                <Checkbox label="Using layout-medium" />
            </div>
            <div className="layout-large" style={style}>
                <Checkbox label="Using layout-large" />
            </div>
        </div>
    );
}

function Callbacks() {
    return (
        <div style={style}>
            <Checkbox
                label="Toggle Me"
                onToggle={val => console.log('onToggle', val)}
            />
        </div>
    );
}
