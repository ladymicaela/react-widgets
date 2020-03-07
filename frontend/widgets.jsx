import React from 'react';

import Clock from './clock';
import Tabs from './tabs';
import Auto from './auto';

const tabs = [
    {title: 'one' , content: 'I am the first tab'},
    {title: 'two', content: 'I am the second tab'},
    {title: 'three', content: 'I am the third tab'}
]

const names = [
    'Anthony',
    'Eddie',
    'Jared',
    'Jason',
    'JP',
    'Margaret',
    'Micaela',
    'Mike',
    'Shawn',
    'Touba' 
]

const Widgets = () => (
    <div>
        <Clock />
        <Tabs tabs={tabs}/>
        <Auto names={names}/>
    </div>
);

export default Widgets;