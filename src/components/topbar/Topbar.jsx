import React from 'react'
import "./topbar.css"
import {NotificationsNone,Language,Settings} from '@mui/icons-material';
export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
             <div className="topleft">
                <span className="logo">Iamaadmin</span>
             </div>
             <div className="topright">
                <div className="topbarIconContainer">
                <NotificationsNone/>
                <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                <Language/>
                <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                <Settings/>
                </div>
                <img src="https://cdnb.artstation.com/p/assets/images/images/024/238/953/large/fuzhe-xiu-avatargirl-2.jpg?1582527832" className="topAvatar" />
             </div>
        </div>
    </div>
  )
}
