import { useMemo } from "react";

export const ProductRow = ({ item, onDelete, onEdit, onDetail }) => {
	return useMemo(() => {
		return (
			<tr key={item.id}>
				<th scope="col">{item.id}</th>
				<td scope="col">{item.name}</td>
				<td scope="col">{item.category}</td>
				<td scope="col">{item.freshness}</td>
				<td scope="col">{item.price}</td>
				<td scope="col">
					<img
						src={item.image}
						alt={item.name}
						width="100"
					/>
				</td>
				<td scope="col">{item.description}</td>
				<td scope="col">
					<div className="d-flex justify-content-center">
						<button
							className="btn btn-danger me-2"
							onClick={() => onDelete(item.id)}
						>
							Delete
						</button>
						<button
							className="btn btn-primary me-2"
							onClick={() => onEdit(item.id)}
						>
							Edit
						</button>
						<button
							className="btn btn-secondary"
							onClick={() => onDetail(item.id)}
						>
							Detail
						</button>
					</div>
				</td>
			</tr>
		);
	}, [item, onDelete, onEdit, onDetail]);
};
