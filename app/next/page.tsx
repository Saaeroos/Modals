import Link from "next/link";

export default function Page() {
    return (
        <div className="mt-5">
            <Link
                href="next/login"
                className="bg-black text-white mr-2 p-2 rounded-md h-10"
            >
                Login
            </Link>
            <Link
                href="/next/signup"
                className="bg-black text-white mr-2 p-2 rounded-md h-10"
            >
                Sign up
            </Link>

            <div className="mt-10">
                <h1 className="p-2 mb-2 text-3xl font-bold text-center">
                    Next parallel routes
                </h1>
            </div>
        </div>
    );
}
