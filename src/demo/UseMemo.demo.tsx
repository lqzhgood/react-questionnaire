import React, { useMemo, useState } from 'react';

const UseMemoDemo = () => {
	const [num1, setNum1] = useState(10);
	const [num2, setNum2] = useState(20);
	const [text, setText] = useState('');

	const sum = useMemo(() => num1 + num2, [num1, num2]);

	return (
		<div>
			<div>{sum}</div>
			<div>
				{num1}
				<button
					onClick={() => {
						setNum1(num1 + 1);
					}}
				>
					setNum1
				</button>
			</div>
			<div>
				<span> {num2}</span>
				<button
					onClick={() => {
						setNum2(num2 + 1);
					}}
				>
					setNum2
				</button>
			</div>

			<input type='text' value={text} onChange={e => setText(e.target.value)} />
		</div>
	);
};

export default UseMemoDemo;
