import { DefaultPageContentTitle, LineRow } from "./styles";

function PageContentTitle({children}) {
    return (
        <>
        <DefaultPageContentTitle>{children}</DefaultPageContentTitle>
        <LineRow />
        </>
    )
}

export default PageContentTitle