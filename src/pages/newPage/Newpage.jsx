import "./newpage.css";

export default function Newpage() {
  return (
    <div className="newuser">
     
        <h1 className="nutit">New User</h1>
          <form  className="nuform">
            <div className="nuitem">
                <label>Username</label>
                <input type="text" placeholder="Alexa" />
            </div>
            <div className="nuitem">
                <label>Full Name</label>
                <input type="text" placeholder="Alex Alwins" />
            </div>
            <div className="nuitem">
                <label>E-mail</label>
                <input type="email" placeholder="AlexaAlwin@gmail.com" />
            </div>
            <div className="nuitem">
                <label>Password</label>
                <input type="password" placeholder="Password" />
            </div>
            <div className="nuitem">
                <label>Phone No</label>
                <input type="number" placeholder="+91 56780 98432" />
            </div>
            <div className="nuitem">
                <label>Address</label>
                <input type="text" placeholder="Canada" />
            </div>
            <div className="nuitem">
                <label>Gender</label>
                <div className="nugender">
                <input type="radio" name="gender" id="Male" value="Male" />
                <label For="Male">Male</label>
                <input type="radio" name="gender" id="FeMale" value="FeMale" />
                <label For="FeMale">Female</label>
                </div>
            </div>
            <div className="nuitem">
                <label>Active</label>
                <select  className="nus" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="nuu">
                Create
            </button>
          </form>
        </div>
  )
}
