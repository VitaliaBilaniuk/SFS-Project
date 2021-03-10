import styled from "styled-components";

const colorGrey = '#E3E3E3';
const colorWhite = '#FFFFFF';
const colorRed = '#F14F51';

export const SfsTabContentWrapper = styled.div`
  height: calc(100% - 57px);
  background-color: #FAFAFA;
  padding: 40px;
  box-sizing: border-box;
`

export const SfsBusinessCardArea = styled.div`
  padding: 12px;
  border: 1px dashed #F14F51;
  box-sizing: border-box;
  border-radius: 3px;
`

export const SfsBusinessCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27vw;
  height: 16vw;
  padding: 20px;
  border: 1px solid ${colorGrey};
  box-sizing: border-box;
`

export const SfsBusinessCardRear = styled(SfsBusinessCard)`
  justify-content: space-between;
`

export const SfsBusinessCardName = styled.h3`
  color: #F14F51;
  margin-bottom: 12px;
`

export const SfsBusinessCardText = styled.p`
  margin-bottom: 12px;
`

export const SfsBusinessCardFrontLogo = styled.img`
  width: 200px;
`

export const SfsBusinessCardRearLogo = styled.img`
  display: block;
  width: 110px;
`

export const SfsBusinessCardQr = styled.img`
  width: 90px;
`

export const SfsBusinessCardQrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const SfsBusinessCardPrintSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
