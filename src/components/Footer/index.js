/**
 *
 * Footer
 *
 */

import React from 'react';
import StyledFooter from './StyledFooter';
import classes from './index.module.css';

import WhatsappLink from '../../assets/img/whatsapp--v1.png';

function Footer() {
  // const [email, setValue] = useState('');

  return (
    <StyledFooter>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=85297300731"
          target="_blank"
          rel="noreferrer"
        >
          <img
            id={classes.whatsapp_logo}
            src={WhatsappLink}
            alt="Whatsapp link"
          />
        </a>
      </div>
    </StyledFooter>
  );
}

export default Footer;
