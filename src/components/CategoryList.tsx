import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
    return (
        <div className="px-4 overflow-x-scroll scrollbar-hide">
            <div className="flex gap-4 md:gap-8">
                <Link
                    href={`/list?cat=test`}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
                >
                    <div className="relative bg-slate-100 w-full h-96">
                    <Image
                        src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww"
                        alt=""
                        fill
                        sizes="20vw"
                        className="object-cover"
                    />
                    </div>
                    <h1 className="mt-8 font-light text-xl tracking-wide">
                        Category Name
                    </h1>
                </Link>
                <Link
                    href={`/list?cat=test`}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
                >
                    <div className="relative bg-slate-100 w-full h-96">
                    <Image
                        src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww"
                        alt=""
                        fill
                        sizes="20vw"
                        className="object-cover"
                    />
                    </div>
                    <h1 className="mt-8 font-light text-xl tracking-wide">
                        Category Name
                    </h1>
                </Link>
                <Link
                    href={`/list?cat=test`}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
                >
                    <div className="relative bg-slate-100 w-full h-96">
                    <Image
                        src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww"
                        alt=""
                        fill
                        sizes="20vw"
                        className="object-cover"
                    />
                    </div>
                    <h1 className="mt-8 font-light text-xl tracking-wide">
                        Category Name
                    </h1>
                </Link>
                <Link
                    href={`/list?cat=test`}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
                >
                    <div className="relative bg-slate-100 w-full h-96">
                    <Image
                        src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww"
                        alt=""
                        fill
                        sizes="20vw"
                        className="object-cover"
                    />
                    </div>
                    <h1 className="mt-8 font-light text-xl tracking-wide">
                        Category Name
                    </h1>
                </Link>
                <Link
                    href={`/list?cat=test`}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
                >
                    <div className="relative bg-slate-100 w-full h-96">
                    <Image
                        src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww"
                        alt=""
                        fill
                        sizes="20vw"
                        className="object-cover"
                    />
                    </div>
                    <h1 className="mt-8 font-light text-xl tracking-wide">
                        Category Name
                    </h1>
                </Link>
                <Link
                    href={`/list?cat=test`}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
                >
                    <div className="relative bg-slate-100 w-full h-96">
                    <Image
                        src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww"
                        alt=""
                        fill
                        sizes="20vw"
                        className="object-cover"
                    />
                    </div>
                    <h1 className="mt-8 font-light text-xl tracking-wide">
                        Category Name
                    </h1>
                </Link>
                <Link
                    href={`/list?cat=test`}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
                >
                    <div className="relative bg-slate-100 w-full h-96">
                    <Image
                        src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww"
                        alt=""
                        fill
                        sizes="20vw"
                        className="object-cover"
                    />
                    </div>
                    <h1 className="mt-8 font-light text-xl tracking-wide">
                        Category Name
                    </h1>
                </Link>
            </div>
        </div>
    );
};

export default CategoryList;