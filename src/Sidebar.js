import React from 'react';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      <SidebarOption title="World Music - Gogol Bordello" Icon={null} />
      <SidebarOption title="Rock - Muse Live Argentina" Icon={null} />
      <SidebarOption title="Punk - The Clash / London Calling" Icon={null} />
      <SidebarOption title="Punk - Ramones Essentials" Icon={null} />
      <SidebarOption title="Russian Rock - Leningrad" Icon={null} />
      <SidebarOption title="Movies Music - Goodbye Lenin OST" Icon={null} />
      <SidebarOption title="Anime Music - Death Note OST" Icon={null} />
    </div>
  );
}

export default Sidebar;
