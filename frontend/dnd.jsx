import React from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import merge from 'lodash/merge'

class DnD extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {

        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        let itemStartIndex = source.index;

        let itemEndIndex = destination.index;

        let temp = merge({}, this.state.items)

        Object.values(temp).forEach(item => {

            if (item.order > itemStartIndex && item.order <= itemEndIndex && item.id !== draggableId) {
                temp[`item_${item.id}`] = {
                    id: item.id,
                    content: item.content,
                    order: item.order - 1
                }
            } else if (item.order >= itemEndIndex && item.order < itemStartIndex && item.id !== draggableId) {
                temp[`item_${item.id}`] = {
                    id: item.id,
                    content: item.content,
                    order: item.order + 1
                }
            }
        })

        let draggedItem = `item_`.concat(draggableId)


        temp[draggedItem] = {
            id: parseInt(draggableId),
            content: temp[draggedItem].content,
            order: itemEndIndex
        }

        this.setState({ items: temp })

    };

    render() {

        let orderedItems = Object.values(this.state.items).sort((a, b) => (a.order > b.order) ? 1 : -1)

        return (
            <div className="dnd">
                <h1 className="dnd-header">React Drag and Drop</h1>
                <DragDropContext
                    onDragEnd={this.onDragEnd}
                >
                    <div className="dnd-droppable">
                        <Droppable droppableId="1">
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps} className="dnd-draggable">
                                    {
                                        orderedItems.map((item, idx) =>
                                            <Draggable draggableId={`${item.id}`} index={idx} key={item.id}>
                                                {(provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <li className="item">{item.content}</li>
                                                    </div>
                                                )}
                                            </Draggable>
                                        )
                                    }
                                    {provided.placeholder}
                                </div>
                            )}

                        </Droppable>
                    </div>
                </DragDropContext>
            </div>
        )
    }


};


export default DnD;