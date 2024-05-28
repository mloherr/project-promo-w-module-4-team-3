import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardUrl({ cardUrl }) {
  return (
    <div className="messageCardCreated">
      <p>La tarjeta ha sido creada:</p>
      <Link to={`${cardUrl}`} target="_blank">
        {cardUrl}
      </Link>
    </div>
  );
}
CardUrl.propTypes = {
  cardUrl: PropTypes.string.isRequired,
};

export default CardUrl;
