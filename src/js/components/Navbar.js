import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Navbar extends Component {
	render() {
		const { user } = this.props;
		return (
			<div id="navbar">
				<div className="container">
					<div className="row">
						<a id="logotype" className="col-md-1" href={__BUILD__.BASE_URL}>
							<img src="https://s3.amazonaws.com/static.qri.io/svg/qri.svg" />
						</a>
						<div className="col-md-4 offset-md-3">
							<small className="alpha caps">SO MUCH A WORK IN PROGRESS. GOOD LUCK.</small>
						</div>
						<div className="menu col-md-4">
							<a href="/explore">Explore</a>
							<Link to="/console">Console</Link>
							{ 
								user ? 
									<Link to={`/${user.username}`}>{user.username}</Link> : 
									<Link to="/login">Login</Link>
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Navbar.propTypes = {
	user : React.PropTypes.oneOfType([
		React.PropTypes.object, 
		React.PropTypes.null])
}

Navbar.defaultProps = {
}