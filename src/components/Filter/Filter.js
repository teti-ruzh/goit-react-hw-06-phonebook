// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter, getFilterQuery } from '../../redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };
  const value = useSelector(getFilterQuery);

  return (
    <input
      type="text"
      className={css.filter}
      value={value}
      onChange={onFilter}
      placeholder="Find contacts by name"
    ></input>
  );
};

export default Filter;

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired
// }
