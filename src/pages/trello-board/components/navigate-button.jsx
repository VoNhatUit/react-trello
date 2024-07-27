import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from 'antd';

function NavigateButton({ text = "Default", to, ...props }) {
  let navigate = useNavigate();

  const goToPage = () => {
    navigate(to);
  };

  return (
    <Button {...props} 
            type="default" 
            className="mr-2 bg-blue-100 text-blue-800 font-bold"  
            onClick={goToPage}>

              {text}
    </Button>

  );
}

export default NavigateButton;
NavigateButton.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  restProps: PropTypes.shape({
    disable: PropTypes.bool,
    className: PropTypes.string
  }),
}