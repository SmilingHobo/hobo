import React from "react";
import styles from './users.modules.css'
import * as axios from "axios";
import usersPhoto from '../../icons/276-2761771_transparent-avatar-png-vector-avatar-icon-png-png.png'

class Users extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items);
                })

        }
    }

    render() {

        return <div>
            <button onClick={this.getUsers}>Get Users</button>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : usersPhoto} className={styles.usersPhoto}/>
                    </div>
                    <div>{u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.Name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users;