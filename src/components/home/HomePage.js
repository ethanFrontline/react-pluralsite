import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Some Fancy Big Title</h1>
        <p>React, Redux and React Router</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

/* When someone else imports this file, they'll say import Homepage from 'Homepage'. This line lets that happen */
export default HomePage;
