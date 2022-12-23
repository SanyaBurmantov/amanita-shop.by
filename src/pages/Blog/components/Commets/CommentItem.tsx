import React from 'react';
import './CommentItem.scss'
import {CommentForm} from "./CommentForm";
import AdminIco from '../../../../assets/icons/Other/AdminIco.svg'

interface CommentItemProps {
    comment: any,
    replies: any,
    setActiveComment: any,
    activeComment: any,
    updateComment: any,
    deleteComment: any,
    addComment: any,
    parentId?: any,
    currentUserId: any,
}


export const CommentItem = ({comment, replies, setActiveComment, activeComment, updateComment, deleteComment, addComment, parentId = null, currentUserId}: CommentItemProps) => {
    const isEditing = activeComment && activeComment.id === comment.id && activeComment.type === "editing";
    const isReplying = activeComment && activeComment.id === comment.id && activeComment.type === "replying";
    const fiveMinutes = 300000;
    const timePassed = new Date().valueOf() - new Date(comment.createdAt).valueOf() > fiveMinutes;
    const canDelete = currentUserId === comment.userId && replies.length === 0 && !timePassed;
    const canReply = Boolean(currentUserId);
    const canEdit = currentUserId === comment.userId && !timePassed;
    const replyId = parentId ? parentId : comment.id;
    const createdAt = new Date(comment.createdAt).toLocaleDateString();

    return (
        <div key={comment.id} className='comment'>
            <div className='comment-container'>
                <div className='comment-image'>
                    <img src={AdminIco}/>
                </div>
                <div className='comment-content'>
                    <div className='comment-author'>{comment.username}</div>
                    <div className='comment-data'>{createdAt}</div>
                </div>
            </div>
                {!isEditing && <div className="comment-text">{comment.body}</div>}
                {isEditing && (
                    <CommentForm
                        submitLabel="Изменить"
                        hasCancelButton
                        initialText={comment.body}
                        handleSubmit={(text: any) => updateComment(text, comment.id)}
                        handleCancel={() => {
                            setActiveComment(null);
                        }}
                    />
                )}
                <div className="comment-actions">
                    {canReply && (
                        <div
                            className="comment-action"
                            onClick={() =>
                                setActiveComment({ id: comment.id, type: "replying" })
                            }
                        >
                            Ответить
                        </div>
                    )}
                    {canEdit && (
                        <div
                            className="comment-action"
                            onClick={() =>
                                setActiveComment({ id: comment.id, type: "editing" })
                            }
                        >
                            Изменить
                        </div>
                    )}
                    {canDelete && (
                        <div
                            className="comment-action"
                            onClick={() => deleteComment(comment.id)}
                        >
                            Удалить
                        </div>
                    )}
                </div>
                {isReplying && (
                    <CommentForm
                        submitLabel="Отправить"
                        handleSubmit={(text: any) => addComment(text, replyId)}
                    />
                )}
                {replies.length > 0 && (
                    <div className="replies">
                        {replies.map((reply: any) => (
                            <CommentItem
                                comment={reply}
                                key={reply.id}
                                setActiveComment={setActiveComment}
                                activeComment={activeComment}
                                updateComment={updateComment}
                                deleteComment={deleteComment}
                                addComment={addComment}
                                parentId={comment.id}
                                replies={[]}
                                currentUserId={currentUserId}
                            />
                        ))}
                    </div>
                )}
            </div>
    );
};