import {useEffect, useState} from "react";

export const useValidation = (value: any, validations: any) => {

    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [isPhone, setPhone] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [PhoneError, setPhoneError] = useState(false)
    const [inputValid, setInputValid] = useState(false)


    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'Phone':
                    value.length != validations[validation] ? setPhone(true) : setPhone(false)
                    break;
                case 'testName':
                    const reg = /[^a-zа-яё\s]/gi;
                    reg.test(String(value).toLowerCase()) ? setNameError(true) : setNameError(false)
                    break;
                case 'testPhone':
                    const reg2 = /[^0-9]/g;
                    reg2.test(String(value).toLowerCase()) ? setPhoneError(true) : setPhoneError(false)
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || minLengthError || isPhone || nameError || PhoneError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, isPhone, nameError, PhoneError])

    return {
        isEmpty,
        minLengthError,
        isPhone,
        inputValid,
        nameError,
        PhoneError
    }
}

