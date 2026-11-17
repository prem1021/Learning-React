import { Link } from 'react-router'

function PageNotFound() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Page Not Found</h1>
            {/* <h2>404 Error</h2> */}
            <div>
                <Link to='/'>Go to Home Page</Link>

            </div>
            <img style={{ width: '40%' }} src="https://youstable.com/blog/wp-content/uploads/2023/09/404-Error.jpg" alt="" />
        </div>
    )
}

export default PageNotFound