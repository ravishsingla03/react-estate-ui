import './profilePage.scss'
import List from '../../components/List/list'
import Chat from '../../components/Chat/chat'
function ProfilePage(){
  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>
              Update Profile
            </button>
          </div>
          <div className="info">
            <span>
              Avatar:  <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            </span>
            <span>
              Username: <b>john Doe</b>
            </span>
            <span>
              Email: <b>johndoe01@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>
              Create new Post
            </button>
          </div>
            <List></List>
          <div className="title">
            <h1>Saved Posts</h1>
          </div>
            <List></List>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat></Chat>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage