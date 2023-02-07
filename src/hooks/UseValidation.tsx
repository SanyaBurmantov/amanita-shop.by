import {useEffect, useState} from "react";

export const useValidation = (value: any, validations: any) => {

    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [inputValid, setInputValid] = useState(false)


    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {

                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;

                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;

                case 'testPhone' :
                    const replacePhone = value.replace(/[^0-9,.]/g, '');
                    replacePhone.length === 12 ? setPhoneError(false) : setPhoneError(true)
                    break;
            }
        }
    }, [value])


    useEffect(() => {
        if (minLengthError || phoneError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }

    }, [isEmpty, minLengthError, phoneError])

    return {
        isEmpty,
        minLengthError,
        inputValid,
        phoneError
    }
}

