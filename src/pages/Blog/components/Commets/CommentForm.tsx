import React, {useState} from 'react';

interface CommentFormProps {
    submitLabel: any,
    handleSubmit: any,
    handleCancel?: any,
    hasCancelButton?: boolean,
    initialText?: string

}


export const CommentForm = ({submitLabel, handleSubmit, handleCancel, hasCancelButton, initialText}:CommentFormProps) => {
    const [text, setText] = useState(initialText='')
    const isTextareaDisabled = text.length === 0;

    const onSubmit = (event: any) => {
        event.preventDefault()
        handleSubmit(text);
        setText('')
    }


    return (
        <form onSubmit={onSubmit}>
            <textarea
                className='comment-form-textarea'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className='comment-form-button' disabled={isTextareaDisabled}>{submitLabel}</button>
            {hasCancelButton && (
                <button
                    type="button"
                    className="comment-form-button comment-form-cancel-button"
                    onClick={handleCancel}
                >
                    Изменить
                </button>
            )}
        </form>
    );
};
