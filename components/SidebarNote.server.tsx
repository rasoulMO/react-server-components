import {format, isToday} from "date-fns";
import ClientSidebarNote from "./SidebarNote.client";

interface Props {
	id: number;
	title: string;
	updatedAt: string;
	content: string;
}

export default function SidebarNote({id, title, content, updatedAt}: Props) {
	const updated_at = new Date(updatedAt);
	const lastUpdated = isToday(updated_at)
		? format(updated_at, "h:mm bb")
		: format(updated_at, "yyyy/MM/dd");

	return (
		<ClientSidebarNote
			id={id}
			title={title}
			opentChildren={<p>{content || "(No content)"}</p>}
		>
			<div className='flex flex-col'>
				<strong className='text-lg text-sky-800'>{title}</strong>
				<span className='text-sky-500'>{lastUpdated}</span>
			</div>
		</ClientSidebarNote>
	);
}
