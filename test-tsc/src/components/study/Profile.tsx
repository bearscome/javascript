import * as React from 'react';

interface Iprops {
    name : string;
    job : string;
}

const Profile = (props: Iprops) => {
    return (
        <div>
            <h2>프로필</h2>
            <div>
                <b>이름 : {props.name}</b>
            </div>
            <div>
                <b>직업 : {props.job}</b>
            </div>
        </div>
    )
}

export default Profile;