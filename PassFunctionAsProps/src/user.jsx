function User({ displayName, name, getUser }) {
    return (
        <div>
            <button onClick={() => displayName(name)}>Diaplay Name</button>
            <button onClick={() => getUser()}>get User</button>
        </div>
    )
}

export default User;