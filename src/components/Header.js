import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <>
    <div className='header'>
      <figure>
        <img className='camaro' src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Price: ${props.car.price}</p>
    </div>
      
    </>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
  }
}

export default connect(mapStateToProps, {})(Header);
