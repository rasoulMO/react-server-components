import SidebarNote from "./SidebarNote.server";
import {notes} from "../data/notes";

export default function NoteList() {
	return (
		<ul>
			{/* <h1>I am a server</h1> */}
			{notes.map((note) => (
				<li key={note.id}>
					<SidebarNote {...note} />
				</li>
			))}
		</ul>
	);
}
