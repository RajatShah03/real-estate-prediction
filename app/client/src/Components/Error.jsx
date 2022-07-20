import { useState } from 'react';
import { Alert } from 'reactstrap';

const Error = ({ error }) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="danger" isOpen={visible} toggle={onDismiss}>
      {error}
    </Alert>
  );
}

export default Error;