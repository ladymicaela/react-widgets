import React from 'react';

class Headers extends React.Component {


    render() {

        let selected = this.props.selectedTab;

        return (
            <ul className="tab-header">
                {this.props.tabs.map((tab, index) => {
                    let title = tab.title;
                    let klass = index == selected ? 'active' : '';
                    return (
                        <li
                            key = {index}
                            className = {klass}
                            onClick = { () => this.props.onTabChosen(index)}
                        >
                            {title}
                        </li>
                    )
                })}
            </ul>
        )
    }
}


class Tabs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 0
        }
        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(tabIdx) {
        this.setState({selectedTab: tabIdx });
    }

    render() {

        let tab = this.props.tabs[this.state.selectedTab];

        return (
            <div className="tabs">
                <h1 className="tabs-header">React Tabs</h1>
                <div className="tabs-div">
                    <Headers 
                        selectedTab = {this.state.selectedTab}
                        tabs = {this.props.tabs}
                        onTabChosen = {this.selectTab}
                    />
                    <div className="tab-content">
                        <article>
                            {tab.content}
                        </article>
                    </div>
                </div>
            </div>
        )
    }

};

export default Tabs;