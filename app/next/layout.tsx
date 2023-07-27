export default async function Layout(props: {
    modal: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <>
            {props.children}
            {props.modal}
        </>
    );
}
