export default async function Layout(props: {
    auth: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <>
            {props.children}
            {props.auth}
        </>
    );
}
