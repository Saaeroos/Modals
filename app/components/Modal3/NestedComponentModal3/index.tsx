import useModal1 from "@/app/modals/useModal1";
import useModal3 from "@/app/modals/useModal3";

export default function NestedComponent() {
    const { onClose: onCloseModal3 } = useModal3();
    const { onOpen: onOpenModal1 } = useModal1();
    return (
        <div className="mt-10 bg-slate-300 p-5">
            <h2 className="mb-2 text-xl">Nested component Modal 3</h2>
            <button
                className="bg-black text-white p-2 rounded-md mr-2"
                onClick={onCloseModal3}
            >
                close modal 3
            </button>
            <button
                className="bg-black text-white p-2 rounded-md"
                onClick={onOpenModal1}
            >
                open Modal 1
            </button>
        </div>
    );
}
