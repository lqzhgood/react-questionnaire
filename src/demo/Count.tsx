import React, { FC, useState } from 'react';

type Props = {
	init: number;
};

const countFC: FC<Props> = props => {
	const [count, setCount] = useState(props.init);

	return (
		<button
			onClick={() => {
				setCount(count + 5);
				setCount(count + 1);
			}}
		>
			{count}
		</button>
	);
};

export default countFC;
