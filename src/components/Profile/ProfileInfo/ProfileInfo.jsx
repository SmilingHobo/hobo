import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloder/Preloder";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return <div>
        <div>

            <img src="http://ukrainepravo.com/upload/iblock/85b/85bb63e3e0f37c463e8582b9feb677f0.jpg" alt=""/>

        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} alt=""/>
        </div>
    </div>
}

export default ProfileInfo;