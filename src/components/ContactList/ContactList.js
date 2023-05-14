// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import { getContacts } from '../../redux/contactsSlice';
import { getFilterQuery } from '../../redux/filterSlice';

const getVisibleContacts = (contacts, query) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(query.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const query = useSelector(getFilterQuery);
  const visibleContacts = getVisibleContacts(contacts, query);

  return (
    <ul>
      {contacts &&
        visibleContacts.map(contact => (
          <ContactItem key={contact.id} {...contact} />
        ))}
    </ul>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ),
// };
