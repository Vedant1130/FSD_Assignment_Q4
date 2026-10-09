import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
    const users = [
        {
            name: "Vedant Saparia",
            image: "/profile.jpg",
            description:
                "MCA student passionate about web development, cloud computing, and DevOps."
        },
        {
            name: "Rahul Sharma",
            image: "https://placehold.co/200x200/764ba2/ffffff?text=Rahul",
            description:
                "Frontend developer who enjoys creating modern and responsive user interfaces."
        },
        {
            name: "Priya Patel",
            image: "https://placehold.co/200x200/667eea/ffffff?text=Priya",
            description:
                "Creative UI/UX enthusiast interested in design and user experience."
        }
    ];

    return (
        <div className="app">
            <header className="page-header">
                <h1>Our Team</h1>
                <p>Meet the people behind the ideas</p>
            </header>

            <div className="profile-container">
                {users.map((user, index) => (
                    <ProfileCard
                        key={index}
                        name={user.name}
                        image={user.image}
                        description={user.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;