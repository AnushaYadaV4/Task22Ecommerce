import './Card.css';

const Card = props => {
  return <div className='card flex'>{props.children}</div>
};

export default Card;