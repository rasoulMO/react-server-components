import type {NextPage} from "next";
import Link from "next/link";
import NoteList from "../components/NoteList.server";
import Something from "../components/Something.client";

const RSC: NextPage = () => {
	return (
		<>
			<div className='flex'>
				<div className='h-screen w-1/4 bg-gray-200'>
					<NoteList />
				</div>
				<div>
					<Something />
				</div>
			</div>
		</>
	);
};

export default RSC;
