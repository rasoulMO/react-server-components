import type {NextPage} from "next";
import Note from "../components/Note.server";
import NoteList from "../components/NoteList.server";

// this a grate hack to access the router, but this works only with server components.

const Home: NextPage = ({router}: any) => {
	// both ways work to get the id
	const selectedId = router?.route ? parseInt(router.route.split("/")[1]) : 1;
	// const selectedId = router?.route ? parseInt(router.route.slice(1)) : 1;
	return (
		<div className='flex'>
			<div className='h-screen w-1/4 bg-gray-200'>
				<NoteList />
			</div>
			<div>
				<Note selectedId={selectedId} />
			</div>
		</div>
	);
};

export default Home;
