import PropTypes from 'prop-types';
import { Span, P, List } from './ContactItem.styled';

// import { selectIsLoading } from '../../redux/contacts/contacts-selectors';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { IconButton } from '../IconButton/IconButton';
// import { LoaderRings } from 'components/Loader/Loader';
import { ReactComponent as DeleteIcon } from 'Icons/delete2.svg';
import { useDispatch } from 'react-redux';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Avatar from 'react-avatar';

export const ContactListItem = ({ id, name, number, createdAt }) => {
  const dispatch = useDispatch();
  // const isDeleting = useSelector(selectIsLoading);
  const timeReduser = data => {
    const year = data.slice(0, 10);
    const time = data.slice(11, 19);
    return year + '  ' + time;
  };

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
    Notify.success(`Contact successfully removed`);
  };

  return (
    <List>
      <Span>
        <Avatar name={name} size="35" round={true} />
      </Span>

      <P>
        Name:<Span>{name}</Span>
      </P>
      <P>
        Phone number:<Span>{number}</Span>
      </P>
      <P>
        Created:<Span>{timeReduser(createdAt)}</Span>
      </P>

      <IconButton onClick={onDeleteContact} aria-label="Удалить контакт">
        {/* {isDeleting && <LoaderRings />} */}
        <DeleteIcon width={20} height={20}></DeleteIcon>
      </IconButton>
    </List>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  number: PropTypes.string,
};
