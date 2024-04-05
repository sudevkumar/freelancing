import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { CiLogin, CiLogout, CiUser } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

import "./Navbar.css";
import { clients } from "../../Utils/utils";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const lsUser = JSON.parse(localStorage.getItem("freeLanceToken"));

  const resetSearch = () => {
    setSearch("");
  };

  const searchResults = () => {
    setOpen(true);
    const res = clients.filter((ele) => ele.name.includes(search));
    setSearchResult(res);
  };

  const handleLogOut = () => {
    localStorage.removeItem("freeLanceToken");
    toast.success("Logout successfully!");
    navigate("/login");
  };

  useEffect(() => {
    if (search.length > 0) {
      searchResults();
    } else {
      setSearchResult([]);
    }
  }, [search]);

  return (
    <>
      <nav className="navbar">
        <div className="nav__logo" onClick={() => navigate("/")}>
          <span>R.K.</span>
          <span>Associates</span>
        </div>
        <div className="nav__search">
          <span>
            <IoIosSearch size={25} />
          </span>
          <input
            type="text"
            name=""
            id=""
            value={search}
            placeholder="Search clients..."
            onChange={(e) => setSearch(e.target.value)}
          />
          {search.length > 0 && (
            <span>
              <RxCross1 onClick={resetSearch} />
            </span>
          )}
        </div>
        <div className="nav__buttons">
          {!lsUser ? (
            <button className="nav__log" onClick={() => navigate("/login")}>
              <span>
                <CiLogin size={21} />
              </span>
              Login
            </button>
          ) : (
            <button className="nav__log" onClick={handleLogOut}>
              <span>
                <CiLogout size={21} />
              </span>
              Logout
            </button>
          )}

          <button className="nav__client">
            <span>
              <CiUser size={21} />
            </span>
            Clients
          </button>

          <button className="nav__fav">
            <span>
              <FaRegHeart size={21} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="search__result">
          {searchResult.map((ele, ind) => (
            <div
              className="search__result-show"
              onClick={() => {
                setOpen(false);
                setSearch("");
              }}
            >
              <p>{ele.name}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
