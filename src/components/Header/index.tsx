import style from "./Header.module.css"

interface HeaderProps {
    children: React.ReactNode;
}

export function Header( {children}: HeaderProps){ 
    return (
        <>
            <h1 className={style.heading}> {children}</h1>
        </>
    )
}