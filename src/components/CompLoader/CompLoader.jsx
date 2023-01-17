import { faOpencart } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CompLoader.scss';

const CompLoader = () => {
  return (
    <div className="compLoader flex_center">
      <FontAwesomeIcon icon={faOpencart} spin />
    </div>
  )
}

export default CompLoader