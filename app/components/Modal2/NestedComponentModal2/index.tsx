import useModal1 from "@/app/modals/useModal1";
import useModal2 from "@/app/modals/useModal2";

export default function NestedComponent() {
    const { onOpen: openModal1 } = useModal1();
    const { onClose: onCloseModal2 } = useModal2();
    return (
        <div className="mt-10 bg-slate-300 p-5">
            <h2 className="text-xl mb-2">Nested component modal 2</h2>
            <button
                className="bg-black text-white p-2 rounded-md mr-2"
                onClick={onCloseModal2}
            >
                close modal 2
            </button>
            <button
                className="bg-black text-white p-2 rounded-md mr-2"
                onClick={openModal1}
            >
                open modal 1
            </button>
        </div>
    );
}
