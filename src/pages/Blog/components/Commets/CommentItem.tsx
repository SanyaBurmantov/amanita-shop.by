import React from 'react';
import AdminIco from "../../../../assets/icons/AdminIco.svg";
import './CommentItem.scss'
import {CommentForm} from "./CommentForm";

interface CommentItemProps {
    comment: any,
    replies: any,
    currentUserId: any,
    deleteComment: any,
    setActivecomment: any,
    activeComment: any,
    addComment: any,
    updateComment: any
    parentId?: any
}


export const CommentItem = ({comment, replies, currentUserId, deleteComment, activeComment, updateComment, addComment, setActivecomment}: CommentItemProps, parentId = null) => {

    const fiveMinutes = 300000;
    const timePassed = new Date().valueOf() - new Date(comment.Data).valueOf() > fiveMinutes;
    const canReply = Boolean(currentUserId)
    const canEdit = currentUserId === comment.userId && !timePassed;
    const canDelete = currentUserId === comment.userId && !timePassed;
    const Data = new Date(comment.Data).toLocaleDateString();
    const isReplying = activeComment && activeComment.type === 'replying' && activeComment.id === comment.id;
    const isEditing = activeComment && activeComment.type === 'editing' && activeComment.id === comment.id;
    const replyId = parentId ? parentId : comment.id;
    const hasCancelButton = false;


    return (
        <div key={comment.id} className='comment'>
            <div className='comment-container'>
                <div className='comment-image'>
                    <img src={AdminIco}/>
                </div>
                <div className='comment-content'>
                    <div className='comment-author'>{comment.username}</div>
                    <div className='comment-data'>{Data}</div>
                </div>
            </div>
            {!isEditing && <div className='comment-text'>{comment.body}</div>}
            {isEditing && (
                <CommentForm
                    submitLabel="Update"
                    hasCancelButton={hasCancelButton}
                    initialText={comment.body}
                    handleSubmit={(text:any) => updateComment(text, comment.id)}
                    handleCancel={() => {
                    setActivecomment(null);
                    }}
                />
            )}
            <div className='comment-actions'>
                {canReply && <div className='comment-action' onClick={()=> setActivecomment({id: comment.id, type: 'replying'})}>Ответить</div>}
                {canEdit && <div className='comment-action'onClick={()=> setActivecomment({id: comment.id, type: 'editing'})}>Изменить</div>}
                {canDelete && <div className='comment-action' onClick={()=> deleteComment(comment.id)}>Удалить</div>}
            </div>
            {isReplying && (
                <CommentForm submitLabel='Отправить' handleSubmit={(text: any) => addComment(text, replyId)}/>
            )}
            {replies.length > 0 && (
                <div className='replies'>
                    {replies.map((reply: any) => (
                        <CommentItem comment={reply} key={reply.id} replies={[]}
                                     currentUserId={currentUserId} deleteComment={deleteComment}
                                     parentId={comment.id} addComment={addComment}
                                     activeComment={activeComment} setActivecomment={setActivecomment}
                                     updateComment={updateComment}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};