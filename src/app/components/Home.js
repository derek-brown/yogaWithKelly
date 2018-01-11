import React from "react";

class Home extends React.Component {
	constructor(props){
		super();
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			description: ""
		};
	}

	onChange = (event) => {
    const state = this.state
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  onSubmit = (event) => {
  	event.preventDefault();

  	const { firstName, lastName, email } = this.state;

  	// axios.post('/api/book', {firstName, lastName, year})
   //    .then((result) => {
   //      this.props.history.push("/")
   //    });
  }

	render(){
		const { firstName, lastName, email } = this.state;
		return(
			<div className="container">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">
							Please submit your information!
						</h3>
					</div>
					<div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Client List </Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="firstName">First Name:</label>
                <input type="text" className="form-control" name="firstName" value={firstName} onChange={this.onChange} placeholder="First Name" />
              </div>
              <div className="form-group">
                <label for="lastName">Last Name:</label>
                <input type="text" className="form-control" name="lastName" value={lastName} onChange={this.onChange} placeholder="Last Name" />
              </div>
              <div className="form-group">
                <label for="email">Email Address:</label>
                <input type="text" className="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email Address" />
              </div>
              <div className="form-group">
                <label for="description">Description:</label>
                <textArea className="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
				</div>
			</div>
		);
	}
}

export default Home;