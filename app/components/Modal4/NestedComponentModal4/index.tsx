import useModal3 from "@/app/hooks/modals/useModal3";
import useModal4 from "@/app/hooks/modals/useModal4";

export default function NestedComponent() {
    const { onClose: onCloseModal4 } = useModal4();
    const { onOpen: onOpenModal3 } = useModal3();
    return (
        <div className="mt-10 bg-slate-300 p-5">
            <h2 className="mb-2 text-xl">Nested component Modal 4</h2>
            <button
                className="bg-black text-white p-2 rounded-md mr-2"
                onClick={onCloseModal4}
            >
                close modal 4
            </button>
            <button
                className="bg-black text-white p-2 rounded-md"
                onClick={onOpenModal3}
            >
                open Modal 3
            </button>
        </div>
    );
}
