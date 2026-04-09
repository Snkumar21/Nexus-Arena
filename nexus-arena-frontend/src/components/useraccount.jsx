import "../App.css";

function Useraccount() {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="useraccount">

            <h2>👤 User Useraccount</h2>

            <div className="useraccount-card">
                <h3>Profile Info</h3>
                <p><strong>Name:</strong> {user?.name}</p>
                <p><strong>Email:</strong> {user?.email}</p>
            </div>

            <div className="useraccount-card">
                <h3>📚 Enrolled Courses</h3>
                <p>No courses enrolled yet</p>
            </div>

            <div className="useraccount-card">
                <h3>📊 Progress</h3>
                <p>Track your learning progress here</p>
            </div>

            <div className="useraccount-card">
                <h3>⚙️ Settings</h3>
                <p>Update your profile & preferences</p>
            </div>

        </div>
    );
}

export default Useraccount;