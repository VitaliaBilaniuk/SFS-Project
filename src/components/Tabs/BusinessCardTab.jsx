import React from 'react';
import { connect } from 'react-redux';

import PerfLogo from './assets/logo-colored.svg';
import {
  SfsBusinessCard,
  SfsBusinessCardArea,
  SfsBusinessCardFrontLogo,
  SfsBusinessCardName,
  SfsBusinessCardPrintSection,
  SfsBusinessCardQr,
  SfsBusinessCardQrWrapper,
  SfsBusinessCardRear,
  SfsBusinessCardRearLogo,
  SfsBusinessCardText,
  SfsTabContentWrapper
} from './styles';

class BusinessCardTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  render() {
    const sfsBusinessCardTabCardWrappersStyle = 'Bdw(1) Bds(s) Bdc(black) P(20) M(20)';
    const { form } = this.props;
    const name = form.name || 'Johny Doe',
      position = form.position || 'Front end developer',
      company = 'Perfectial',
      email = form.email || 'yourmail@perfectial.com',
      phone = form.phone || '+38 (093) 123 45 47',
      mobile = form.mobile || '',
      skype = form.skype || '',
      qrCodeSrc =
        `https://qrickit.com/api/qr.php?d=BEGIN%3aVCARD%0d%0a` +
        `VERSION%3a3.0%0d%0aN%3a${name}%0d%0aORG%3a${company}%0d%0aTITLE%3a${position}%0d%0a` +
        `EMAIL%3a${email}%0d%0aTEL%3bTYPE%3dCELL%3a${phone}%0d%0aTEL%3bTYPE%3dWORK%2c` +
        `VOICE%3a${mobile}%0d%0aNOTE%3aSkype%20${skype}%0d%0aURL%3a%0d%0aADR%3a%3b%3b%0d%0a` +
        `END%3aVCARD%0A&addtext=&txtcolor=000000&fgdcolor=000000&bgdcolor=FFFFFF&qrsize=200`;
    return (
      <SfsTabContentWrapper>
        <SfsBusinessCardPrintSection className="section-to-print">
          <SfsBusinessCardArea>
            <SfsBusinessCard>
              <SfsBusinessCardFrontLogo src={PerfLogo} />
            </SfsBusinessCard>
          </SfsBusinessCardArea>

          <SfsBusinessCardArea>
            <SfsBusinessCardRear>
              <div>
                <SfsBusinessCardName>{name}</SfsBusinessCardName>
                <SfsBusinessCardText>{position}</SfsBusinessCardText>
                <SfsBusinessCardText>{email}</SfsBusinessCardText>
                <SfsBusinessCardText>{phone}</SfsBusinessCardText>
                <SfsBusinessCardText>{mobile}</SfsBusinessCardText>
                <SfsBusinessCardText>{skype}</SfsBusinessCardText>
              </div>
              <SfsBusinessCardQrWrapper>
                <SfsBusinessCardRearLogo src={PerfLogo} />
                <SfsBusinessCardQr src={qrCodeSrc} />
              </SfsBusinessCardQrWrapper>
            </SfsBusinessCardRear>
          </SfsBusinessCardArea>
        </SfsBusinessCardPrintSection>
        <button className="M(20)" onClick={() => window.print()}>
          Print or Download card
        </button>
      </SfsTabContentWrapper>
    );
  }
}

const mapStateToProps = ({ form }) => ({ form });

export default connect(mapStateToProps, {})(BusinessCardTab);
