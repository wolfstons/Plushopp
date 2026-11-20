import { NavLink, Outlet } from "react-router";

function Layout(){
    return(
        <>
            <header>
                <h1 className="text-center">Webáruház</h1>
                <nav className="flex gap-2 justify-center">
                    <NavLink to="/" end>Publikus felület</NavLink>
                    <NavLink to="/admin">Admin felület</NavLink>
                    <NavLink to="/kosar">Kosár felület</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;