import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { get_tickets } from "../../helpers";
import { BACKEND_URL } from "../../params";

const SearchBox = ({ setSearch }) => {
  return (
    <div className="py-6 pl-6">
      <input
        className="border rounded-md h-10"
        type="text"
        placeholder="Search for a ticket..."
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
