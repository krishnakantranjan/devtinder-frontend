const UserCard = ({ user, onNext }) => {
    if (!user) return null;
    const { firstName, lastName, gender, age } = user;

    return (
        <div className="card bg-base-300 w-75 shadow-xl">
            <figure>
                <img
                    src="https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg"
                    alt={`${firstName} ${lastName}`}
                    className="w-full h-64 object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                <p className="text-gray-600 text-sm">{`${age} years old, ${gender.toUpperCase()}`}</p>
                <div className="card-actions justify-between mt-4">
                    <button className="btn border border-red-500 text-red-500 hover:bg-red-500 hover:text-white" onClick={onNext}>
                        Ignore
                    </button>
                    <button className="btn bg-green-500 text-white hover:bg-green-600" onClick={onNext}>
                        Interested
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;

