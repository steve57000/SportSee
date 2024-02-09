import { ReactComponent as Logo } from '../../logoWhite.svg';
import './Footer.css';
function Footer() {
  const styleP = {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 'calc(8px + .6vw)',
    marginTop: 'calc(5px + 3vh)',
    marginBottom: '0',
    width: 'calc(100px + 15vw)',
    textWrap: 'balance',
  };
  return (
    <div
      className="Footer"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="FooterContent"
        style={{ maxWidth: '50vw', paddingTop: 'calc(5px + 2vh)' }}
      >
        {/* Logo is an actual React component */}
        <Logo className="FooterLogo" />
        <p style={styleP}>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
