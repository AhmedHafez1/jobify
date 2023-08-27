import { PropTypes } from 'prop-types';
const FormRow = ({ rowName, type, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={rowName} className="form-label">
        {labelText}
      </label>
      <input
        type={type}
        id={rowName}
        name={rowName}
        className="form-input"
        required
      />
    </div>
  );
};

FormRow.propTypes = {
  labelText: PropTypes.string.isRequired,
  rowName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormRow;
