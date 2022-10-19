import React, {useEffect, useState} from 'react';
import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
    deleteComment as deleteCommentApi,
    updateComment as updateCommentApi
} from '../../../../data/Comment'
import {CommentItem} from "./CommentItem";
import {IComment} from "../../../../types";
import {CommentForm} from "./CommentForm";

interface CommentListProps {
    currentUserId: string,
}

export const CommentList = ({currentUserId}: CommentListProps) => {

    const [backendComments, setBackendComments] = useState<IComment[]>([]);

    const [activeComment, setActivecomment] = useState(null);

    const rootComments = backendComments.filter(backendComment => backendComment.parentId === null);

    const getReplies = (commentId: any) => {
        return backendComments.filter((backendComment) =>
            backendComment.parentId === commentId).sort((a, b) =>
            new Date(a.Data).getTime() - new Date(b.Data).getTime())
    }

    useEffect(() => {
        getCommentsApi().then((data) => {
            setBackendComments(data);
        })
    }, []);

    const updateComment = (text: any, commentId: any) => {
        updateCommentApi(text).then(() => {
            const updatedBackendComments = backendComments.map((backendComment) => {
                if (backendComment.id === commentId) {
                    return { ...backendComment, body: text };
                }
                return backendComment;
            });
            setBackendComments(updatedBackendComments);
            setActivecomment(null);
        });
    };

    const addComment = (text: any, parentId: null) => {
        createCommentApi(text, parentId).then(comment => {
            setBackendComments([comment, ...backendComments]);
            setActivecomment(null);
        })
    }

    const deleteComment = (commentId: any) => {
        if (window.confirm("Долбаеб????")) {
            deleteCommentApi(commentId).then(() => {
                const updatedBackendComments = backendComments.filter(
                    (backendComment) => backendComment.id !== commentId
                );
                setBackendComments(updatedBackendComments);
            })
        }
    }

    return (
        <div className='comments'>
            <div className="comments-title">Комментарии</div>
            <div className='comment-form-title'>Написать комментарий</div>
            <CommentForm submitLabel='Отправить' handleSubmit={addComment} handleCancel={undefined}/>
            <div className='comments-container'>
                {rootComments.map((rootComment) => (
                    <CommentItem key={rootComment.id}
                                 comment={rootComment}
                                 replies={getReplies(rootComment.id)}
                                 currentUserId={currentUserId}
                                 deleteComment={deleteComment}
                                 activeComment={activeComment}
                                 setActivecomment={setActivecomment}
                                 addComment={addComment}
                                 updateComment={updateComment}/>
                ))}
            </div>
        </div>
    );
};
