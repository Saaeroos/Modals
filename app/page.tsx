"use client";

import Modal1 from "./components/Modal1";
import Modal2 from "./components/Modal2";
import Modal3 from "./components/Modal3";
import Modal4 from "./components/Modal4";
import useModal1 from "./hooks/useModal1";
import useModal2 from "./hooks/useModal2";
import useModal3 from "./hooks/useModal3";
import useModal4 from "./hooks/useModal4";

export default function Home() {
    const { onOpen: openModal1 } = useModal1();
    const { onOpen: openModal2 } = useModal2();
    const { onOpen: openModal3 } = useModal3();
    const { onOpen: openModal4 } = useModal4();
    return (
        <>
            <div className="mt-10">
                <Modal1 />
                <Modal2 />
                <Modal3 />
                <Modal4 />
                <h1 className="p-2 mb-2 text-3xl font-bold text-center">
                    Headless ui modals
                </h1>
                <div className="flex w-full justify-center h-[100vh]">
                    <button
                        className="bg-black text-white mr-2 p-2 rounded-md h-10"
                        onClick={openModal1}
                    >
                        Modal 1
                    </button>
                    <button
                        className="bg-black text-white p-2 rounded-md mr-2 h-10"
                        onClick={openModal2}
                    >
                        Modal 2
                    </button>
                </div>
                <div className="mt-10 mx-auto px-4 flex items-center">
                    <span className="text-white bg-red-500 p-2 rounded-xl mr-2">
                        IMPORTANT:
                    </span>
                    <p>
                        <b>Headless ui</b> Dialog limitation You will encounter
                        issues if you want to nest modals
                    </p>
                </div>
                <div className="mt-10 mx-auto px-4 flex items-center">
                    <span className="text-white bg-slate-500 p-2 rounded-xl mr-2">
                        ALTERNATIVE
                    </span>
                    <p>
                        A solution to stack modals above each others would be
                        using React portals, a popular package which use Portals
                        is <b>react-modal</b>
                    </p>
                </div>
                <div className="flex justify-center mb-5">
                    <button
                        className="bg-black text-white p-2 rounded-md mr-2 mt-4 "
                        onClick={openModal3}
                    >
                        Modal 3
                    </button>
                    <button
                        className="bg-black text-white p-2 rounded-md mr-2 mt-4 "
                        onClick={openModal4}
                    >
                        Modal 4
                    </button>
                </div>
            </div>
        </>
    );
}
