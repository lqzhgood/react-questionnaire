import React from 'react';
import { DndContext, DragEndEvent, MouseSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

type Props = {
    children: JSX.Element | JSX.Element[];
    items: ({ id: string } & unknown)[];
    onDragEnd: (oldIndex: number, newIndex: number) => void;
};

function dnd({ children, items, onDragEnd }: Props) {
    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 8,
            },
        }),
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (!over) return;

        if (active.id !== over.id) {
            const oldIndex = items.findIndex(c => c.id === active.id);
            const newIndex = items.findIndex(c => c.id === over.id);
            onDragEnd(oldIndex, newIndex);
        }
    }

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                {children}
            </SortableContext>
        </DndContext>
    );
}

export default dnd;
