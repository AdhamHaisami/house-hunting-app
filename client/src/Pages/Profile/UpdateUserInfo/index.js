import React, { useState } from 'react';

import { PropTypes } from 'prop-types';
import Axios from 'axios';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';

import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import validationSchema from '../../../Utils/validations/updateUser';
import Loading from '../../../Components/Loading';

import useStyles from '../UserInfo/style';

function UpdateUser({ setUpdateUser, handleClickAlert, handleCloseAlert }) {
  const classes = useStyles();
  const [username, setUsername] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  const handleClickDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const clear = () => {
    setUsername();
    setMobile();
    setAddress();
  };
  const handleChange = ({ target }) => {
    const { value, name } = target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'mobile':
        setMobile(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
    }
  };
  const handleSubmit = async () => {
    try {
      setErrorMsg(null);
      setOpenDialog(true);
      handleCloseAlert();
      setIsLoading(true);
      const user = { username, mobile, address };
      await validationSchema.validate(user, { abortEarly: false });
      setUpdateUser(false);
      await Axios.patch('/api/v1/users', user);
      clear();
      setIsLoading(false);
      setUpdateUser(true);
      setOpenDialog(false);
      handleClickAlert();
    } catch (err) {
      setIsLoading(false);
      setErrorMsg(err.response ? err.response.data.message : err.errors[0]);
    }
  };
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.editBtn}
        onClick={handleClickDialog}
      >
        Update info
      </Button>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-label="update-info"
      >
        <DialogTitle>Update informations</DialogTitle>
        <DialogContent>
          <Input
            autoFocus
            margin="dense"
            id="name"
            name="username"
            label="username"
            type="text"
            fullWidth
            value={username}
            onChange={handleChange}
          />
          <Input
            autoFocus
            margin="dense"
            id="address"
            name="address"
            label="address"
            type="text"
            fullWidth
            value={address}
            onChange={handleChange}
          />
          <Input
            autoFocus
            margin="dense"
            id="mobile"
            name="mobile"
            label="mobile"
            type="text"
            fullWidth
            value={mobile}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            color="secondary"
            variant="outlined"
          >
            Cancel
          </Button>

          <Button onClick={handleSubmit} color="primary" variant="contained">
            {isLoading ? <Loading color="secondary" /> : 'Save'}
          </Button>

          {errorMsg && (
            <Alert className={classes.alert} severity="error">
              {errorMsg}
            </Alert>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}

UpdateUser.propTypes = {
  setUpdateUser: PropTypes.func.isRequired,
  handleClickAlert: PropTypes.func.isRequired,
  handleCloseAlert: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    username: PropTypes.string,
    mobile: PropTypes.number,
    address: PropTypes.string,
  }).isRequired,
};

export default UpdateUser;
