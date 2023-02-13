import { useAuth0 } from '@auth0/auth0-react'
import './Profile.scss'

const Profile = () => {
  const { logout, user } = useAuth0();
  return (
    <section className='login section_padding d-flex justify-content-center min-vh-100'>
      <figure className="login_cont">
        <img className='profile_img' src={user.picture} alt="profile img" />
        <figcaption className='profile_info flex-grow-1'>
          {user.name && <p><span>Name: </span>{user.name}</p>}
          {user.email && <p><span>Email: </span>{user.email}</p>}
          {user.locale && <p><span>Locale: </span>{user.locale}</p>}
          {user.nickname && <p><span>Nickname: </span>{user.nickname}</p>}
          {user.updated_at && <p><span>Updated At: </span>{user.updated_at}</p>}
          <button className='custom_button logout d-block ms-auto' onClick={() => logout()}>Log out</button>
        </figcaption>
      </figure>
    </section>
  )
}

export default Profile