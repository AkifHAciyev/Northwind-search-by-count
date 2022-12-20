import React, { useEffect, useState } from 'react';

const Table = () => {
	const [categories, setcategories] = useState([]);
	const [searchedVal, setSearchedVal] = useState('');

	useEffect(() => {
		loadData();
	}, []);

	const loadData = () => {
		fetch('https://northwind.vercel.app/api/products')
			.then((res) => res.json())
			.then((data) => {
				setcategories(data);
			});
	};

	return (
		<>
			<input
				value={searchedVal}
				onChange={(e) => setSearchedVal(e.target.value)}
				type="number"
				placeholder="search by name"
			/>
			<table className="w3-table-all">
				<thead className="w3-light-grey">
					<tr>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					{(!searchedVal &&
						categories.map((data) => {
							return (
								<tr key={data.id}>
									<td>{data.name}</td>
								</tr>
							);
						})) ||
						categories.slice(0, searchedVal).map((data) => {
							return (
								<tr key={data.id}>
									<td>{data.name}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</>
	);
};

export default Table;
