import Link from "next/link";
import {useState} from "react";
import {ChevronDownIcon, ChevronRightIcon} from "@heroicons/react/solid";

export default function ClientSidebarNote({id, children, opentChildren}: any) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<div className='group flex items-center px-2 py-2 text-base font-medium'>
				<Link href={`/${id}`}>
					<a>{children}</a>
				</Link>
				<button
					className='ml-auto text-sky-500 focus:outline-none'
					onClick={(e) => {
						e.stopPropagation();
						setIsOpen(!isOpen);
					}}
				>
					{isOpen ? (
						<ChevronDownIcon className='w-6 h-6' />
					) : (
						<ChevronRightIcon className='w-6 h-6' />
					)}
				</button>
			</div>
			{isOpen && (
				<div className='group flex items-center px-2 py-2 text-base font-medium'>
					{opentChildren}
				</div>
			)}
		</div>
	);
}
