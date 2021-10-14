import React from 'react';

import { ButtonBase } from '@material-ui/core';
import useFirebase from '../hooks/useFirebase';

const LoginButton = () => {
  const { signInWithPopup } = useFirebase();

  return (
    <ButtonBase
      type="button"
      onClick={signInWithPopup}
      className="!rounded relative"
    >
      <img
        src="/images/google/btn_google_signin_dark_normal_web@2x.png"
        alt="Google Login Button"
        width={224.217}
        height={54}
      />
    </ButtonBase>
  );
};

export default LoginButton;
