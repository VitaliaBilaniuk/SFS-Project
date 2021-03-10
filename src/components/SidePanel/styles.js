import styled from "styled-components";
import PhoneInput from 'react-phone-number-input';

const colorGrey = '#E3E3E3';

export const SfsCheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    font-size: 14px;
`

export const SfsCheckboxInput = styled.input`
    width: 15px;
    height: 15px;
    cursor: pointer;
`

export const SfsFormLabel = styled.label`
    display: block;
    position: relative;
    margin-top: 35px;
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
`

export const SfsFormPhoneButton = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    right: 0;
    bottom: -15px;
    outline: none;
    cursor: pointer;
`

export const SfsFormMobileButton = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    right: 15px;
    bottom: -15px;
    outline: none;
    cursor: pointer;
    transform-origin: bottom;
    transform: rotate(45deg);
`

export const SfsFormAdditionalHeading = styled.h2`
    font-size: 20px;
    font-weight: 400;
`

export const SfsFormPhoneInput = styled(PhoneInput)`
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #111123;
`

export const SfsImgUpload = styled.img`
    display: block;
    width: 60px;
    height: 60px;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid ${colorGrey};
    margin-right: 32px;
`

export const SfsImgUploadWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 25px;
`

export const SfsImgUploadInput = styled.input`
    display: none;
`

export const SfsFormInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    font-size: 18px;
    padding: 10px 20px;
    background-color: #FAFAFA;
    border: 1px solid ${colorGrey};
    border-bottom: 1px solid;
    border-color: ${props => (props.errors ? "red" : "#dddddd")};
    outline: none;
    &:focus::-webkit-input-placeholder {
        color: rgba(0, 0, 0, 0.5);
    }
`

export const SfsFormInputLabel = styled.label`
    display: block;
    font-size: 14px;
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 0.5);
`

export const SfsFormFieldset = styled.fieldset`
    position: relative;
    padding: 0;
    margin-bottom: 25px;
    border: 0;
    overflow: hidden;
`

export const SfsFormErrorTitle = styled.span`
    font-size: 12px;
    color: red;
`

export const SfsAside = styled.aside`
    width: 33%;
    flex-shrink: 0;
    height: 100%;
    border-right: 1px solid ${colorGrey};
    overflow-y: auto;
`

export const SfsAsideContent = styled.div`
    padding: 32px 40px;
`

export const SfsAsideTitle = styled.h1`
    margin-bottom: 24px;
`