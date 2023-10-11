import React from 'react';

type List = {
	id: number;
	title: string;
	isPublished: boolean;
};

type Props = {
	list: List[];
	add: () => void;
	del: (id: number) => void;
	push: (id: number) => void;
};

const QuestionCard = (props: Props) => {
	const { list, add, del, push } = props;

	return (
		<div>
			{list.map(v => {
				return (
					<div key={v.id} style={{ color: v.isPublished ? 'green' : 'red' }}>
						{v.title + v.id}

						<button onClick={add}>新增</button>
						<button onClick={() => push(v.id)}>发布</button>
						<button onClick={() => del(v.id)}>删除</button>
					</div>
				);
			})}
		</div>
	);
};

export default QuestionCard;
