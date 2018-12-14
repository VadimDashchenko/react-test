import PropTypes from 'prop-types'

const postShape = PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
});

export default postShape;