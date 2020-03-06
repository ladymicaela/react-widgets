import React from 'react';

import Clock from './clock';
import Tabs from './tabs';

const tabs = [
    {title: 'one' , content: 'I am the first tab'},
    {title: 'two', content: 'I am the second tab'},
    {title: 'three', content: 'I am the third tab'}
]






const Widgets = () => (
    <div>
        <Clock />
        <Tabs tabs={tabs}/>
    </div>
);

export default Widgets;