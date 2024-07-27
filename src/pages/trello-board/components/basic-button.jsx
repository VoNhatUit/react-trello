import PropTypes from 'prop-types';

function BasicButton({ text = "Default", ...restProps }) {
  console.log('BasicButton render')
  return (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-1"
      {...restProps} 
    >{text}</button>
  )
}

export default BasicButton

BasicButton.propTypes = {
  text: PropTypes.string,
  restProps: PropTypes.shape({
    disable: PropTypes.bool,
    className: PropTypes.string
  }),
}