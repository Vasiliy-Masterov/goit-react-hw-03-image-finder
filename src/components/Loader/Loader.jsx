import PropTypes from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return <ThreeDots color="#3f51b5" height={40} width={40} />;
};

Loader.propTypes = {
  ThreeDots: PropTypes.element,
};
