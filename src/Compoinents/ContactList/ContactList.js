import PropTypes from 'prop-types';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button name={id} onClick={onClick}>
              Delede
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactList;
