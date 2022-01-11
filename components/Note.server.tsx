import {format} from "date-fns";
import {notes} from "../data/notes";

export default function Note({selectedId = 1}) {
	const note = notes[selectedId - 1];

	let {title, updatedAt, content} = note;
	const updated_at = new Date(updatedAt);

	return (
		<div>
			<div>
				<h1 className='text-4xl font-bold'>{title}</h1>
				<div role='menubar' className='text-lg'>
					<small className='text-gray-600' role='status'>
						last update was on {format(updated_at, "yyyy/MM/dd")}
					</small>
				</div>
			</div>
			{content}
		</div>
	);
}
