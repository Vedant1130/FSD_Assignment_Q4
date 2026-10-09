function ProfileCard({ name, image, description }) {
    return (
        <div className="profile-card">
            <img
                src={image}
                alt={name}
                className="profile-image"
            />

            <div className="profile-content">
                <h2>{name}</h2>
                <p>{description}</p>
                <button className="profile-btn">
                    View Profile
                </button>
            </div>
        </div>
    );
}

export default ProfileCard;