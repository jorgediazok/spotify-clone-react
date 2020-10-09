import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {useDataLayerValue} from "./DataLayer";
import { Avatar } from '@material-ui/core';
import './Header.css';

function Header() {
  const [{user}, dispatch] = useDataLayerValue()
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
        style={{border:"none"}}
          type="text"
          placeholder="Search for artists, Songs or Podcasts"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
