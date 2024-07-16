import React from 'react';
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  'data-row-key': string;
}
const Row = (props: RowProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: props['data-row-key'],
  });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    transition,
    cursor: 'move',
    ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
  };

  return <tr {...props} ref={setNodeRef} style={style} {...attributes} {...listeners} />;
};
interface ContentTableType2Props {
  data: any[];
  columns: ColumnsType<any>;
  onSave: (updatedData: any[]) => void; 
}
const ContentTableType2: React.FC<ContentTableType2Props> = ({ data, columns, onSave }) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 1,
      },
    })
  );
  const onDragEnd = ({ active, over }: any) => {
    if (active.id !== over?.id) {
      const activeIndex = data.findIndex((item) => item.key === active.id);
      const overIndex = data.findIndex((item) => item.key === over?.id);
      const reorderedData = arrayMove(data, activeIndex, overIndex);
      onSave(reorderedData);
    }
  };

  return (
    <DndContext sensors={sensors} modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext items={data.map((item) => item.key)} strategy={verticalListSortingStrategy}>
        <Table
          components={{
            body: {
              row: Row,
            },
          }}
          rowKey="key"
          scroll={{ y: 'calc(100vh - 200px )' }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </SortableContext>
    </DndContext>
  );
};

export default ContentTableType2;
