import React, {useState} from 'react';

interface CommentFormProps {
    submitLabel: any,
    handleSubmit: any,
    handleCancel?: any,
    hasCancelButton?: any,
    initialText?: any

}

export const CommentForm = ({submitLabel, handleSubmit, handleCancel = false, hasCancelButton, initialText=''}: CommentFormProps) => {

    const [text, setText] = useState(initialText);

    const isTextareaDisabled = text.length === 0;

    const onSubmit = (e: any) => {
        e.preventDefault();
        handleSubmit(text);
        setText("");
    };

    return (
      <form onSubmit={onSubmit}>
      <textarea
          className="comment-form-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}/>
            <button className="comment-form-button" disabled={isTextareaDisabled}>
                {submitLabel}
            </button>
            {hasCancelButton && (
                <button
                    type="button"
                    className="comment-form-button comment-form-cancel-button"
                    onClick={handleCancel}
                >
                    Отменить
                </button>
            )}
      </form>
    );
};


