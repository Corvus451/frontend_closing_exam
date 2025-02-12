import { useState } from "react";

const NavBar = ({onSearch}) => {

    const [term, setTerm] = useState("");

    const handleSearch = (e)=> {
        e.preventDefault();
        onSearch(term);
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Cat Adoption</h1>
                    <form className="d-flex" role="search" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=> setTerm(e.target.value)} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default NavBar;