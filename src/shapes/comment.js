import PropTypes from 'prop-types';

const commentShape = PropTypes.shape({
    id:PropTypes.number,
    postId: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired
});

export default commentShape;