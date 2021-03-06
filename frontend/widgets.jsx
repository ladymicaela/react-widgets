import React from 'react';

import Clock from './clock';
import Tabs from './tabs';
import AutoComplete from './auto';
import DnD from './dnd';
import Weather from './weather';
import Calculator from './calculator';
import MagicEightBall from './magic_eight_ball';
import Dice from './dice';
import Notes from './notes';
import Countdown from './countdown';
import BubbleWrap from './bubble_wrap';

const tabs = [
    {title: 'one' , content: 'I am the first tab'},
    {title: 'two', content: 'I am the second tab'},
    {title: 'three', content: 'I am the third tab'}
]

const names = [
    'Anthony',
    'Christina',
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

const items = {
    item_1: {
        id: 1,
        content: "item 1",
        order: 0
    },
    item_2: {
        id: 2,
        content: "item 2",
        order: 1
    },
    item_3: {
        id: 3,
        content: "item 3",
        order: 2
    },
    item_4: {
        id: 4,
        content: "item 4",
        order: 3
    },
    item_5: {
        id: 5,
        content: "item 5",
        order: 4
    },
}

const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
]

const dice = [
    {type: "D4", value: 4, total: 0, amount: 0},
    {type: "D6", value: 6, total: 0, amount: 0},
    {type: "D8", value: 8, total: 0, amount: 0},
    {type: "D10", value: 10, total: 0, amount: 0},
    {type: "D12", value: 12, total: 0, amount: 0},
    {type: "D20", value: 20, total: 0, amount: 0},
]

const bubbleWrap = Array(81).fill(false)

const Widgets = () => (
    <div className="widgets">
        <div className="informative">
            <Clock />
            <Weather />
        </div>
        <div className="interactive">
            <Tabs tabs={tabs}/>
            <AutoComplete names={names}/>
            <DnD items={items} />
            <Calculator />
            <MagicEightBall responses={responses}/>
            <Dice dice={dice}/>
            <Notes />
            <Countdown />
            <BubbleWrap bubbleWrap={bubbleWrap}/>
        </div>
    </div>
);

export default Widgets;