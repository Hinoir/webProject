import React from 'react';
import '../css/login.css';
// import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
//const User = require('../../api/model/user');
//const jwt = require('jsonwebtoken');
import { Accounts } from 'meteor/accounts-base';
export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      password: '',
      email: '',
      name: '',
      birthdate: '',
      geneder: '',
      location: '',
      passwordConfirmed: '',
      redirectToReferer: false,
      error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

     const routing = "" //(
    //    <Router>
    //      <div>
    //        <Route path="/" component={App} />
    //        <Route path="/user" component={User} />
    //      </div>
    //    </Router>
    //  
    //)
}

//  async Save() {

//    let date = new Date(24 * 3600 * 1000);
//    let gender = '';
//    let location = '';
//    //const newUser = new User({password,email,name,date,gender,location});
//    //await newUser.save();
//    //const token = jwt.sign({_id: newUser._id}, 'keys');
//    console.log("Enter")
// }

submit = () => {
  const { email, password, name } = this.state;
  Accounts.createUser({ password,email, name }, (err) => {
    if (err) {
      this.setState({ error: err.reason });
    } else {
      this.setState({redirectToReferer: true });
    }
  });
}

handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
      [password]: value,
      [email]: value
    });
}

handleSubmit(e) {
    e.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);
}



render() {

  const { from } = this.props.location.state || { from: { pathname: '/' } };
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }

    return (
      <Container>
        <Row>
        <Col>
    <div className="FormCenter" >

        <form onSubmit={this.handleSubmit} className="FormFields" >
          <div><h1 style={{ paddingBottom: '20%'}}>Registrarse</h1></div>

          <div className="FormField" >
            <input type="email" id="email" className="FormField__Input" placeholder="Correo Electrónico" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <input type="text" id="name" className="FormField__Input" placeholder="Nombre de Usuario" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <input type="password" id="password" className="FormField__Input" placeholder="Contraseña" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <input type="password" id="passwordConfirmed" className="FormField__Input" placeholder="Confirmar Contraseña" name="passwordConfirmed" value={this.state.passwordConfirmed} onChange={this.handleChange} />
          </div>

          <div className="FormField">
              <Button variant="dark" style={{borderRadius: '25%'}} onSubmit={this.submit}>Registrarse</Button>
          </div>
        </form>
      </div>
      </Col>
      <Col>
      <Image src="https://toppng.com/public/uploads/thumbnail/call-center-vertical-line-with-shadow-11562970151lqn80zjnmb.png" fluid />
      </Col>
      <Col style={{ paddingRight: '15%'}}>
      <div className="FormCenter" >

        <form onSubmit={this.handleSubmit} className="FormFields" >
          <div><h1 style={{ paddingBottom: '20%'}}>Iniciar Sesión</h1></div>

          <div className="FormField">
            <input type="text" id="name" className="FormField__Input" placeholder="Nombre de Usuario" name="name_login" value={this.state.name_login} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <input type="password" id="password" className="FormField__Input" placeholder="Contraseña" name="password_login" value={this.state.password_login} onChange={this.handleChange} />
          </div>
          <div className="FormField">
              <Button variant="dark" style={{borderRadius: '25%'}}>Iniciar Sesión</Button>
          </div>
        </form>
      </div>
      </Col>
      </Row>
      </Container>
    );
  }
}