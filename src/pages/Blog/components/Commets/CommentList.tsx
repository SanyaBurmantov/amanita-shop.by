import React, {useEffect, useState} from 'react';
import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
    deleteComment as deleteCommentApi,
    updateComment as updateCommentApi} from '../../../../data/Comment'
import {CommentItem} from "./CommentItem";
import {IComment} from "../../../../types";
import {CommentForm} from "./CommentForm";

interface CommentsList {
    currentUserId: any,
}

export const CommentsList = ({currentUserId}: CommentsList) => {

    const [backendComments, setBackendComments] = useState<IComment[]>([]);

    const [activeComment, setActiveComment] = useState(null);

    const rootComments = backendComments.filter(
        (backendComment) => backendComment.parentId === null
    );
    const getReplies = (commentId: any) =>
        backendComments
            .filter((backendComment) => backendComment.parentId === commentId)
            .sort(
                (a, b) =>
                    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
    const addComment = (text: any, parentId: any) => {
        createCommentApi(text, parentId).then((comment) => {
            setBackendComments([comment, ...backendComments]);
            setActiveComment(null);
        });
    };

    const updateComment = (text: any, commentId: any) => {
        updateCommentApi(text).then(() => {
            const updatedBackendComments = backendComments.map((backendComment) => {
                if (backendComment.id === commentId) {
                    return { ...backendComment, body: text };
                }
                return backendComment;
            });
            setBackendComments(updatedBackendComments);
            setActiveComment(null);
        });
    };
    const deleteComment = (commentId: any) => {
        if (window.confirm("Долбаеб????")) {
            deleteCommentApi().then(() => {
                const updatedBackendComments = backendComments.filter(
                    (backendComment) => backendComment.id !== commentId
                );
                setBackendComments(updatedBackendComments);
            });
        }
    };

    useEffect(() => {
        getCommentsApi().then((data) => {
        setBackendComments(data);
        });
    }, []);

    return (
        <div className="comments">
            <h3 className="comments-title">Комментариев</h3>
            <div className="comment-form-title">Написать комментарий</div>
            <CommentForm submitLabel="Отправить" handleSubmit={addComment} />
            <div className="comments-container">
                {rootComments.map((rootComment) => (
                    <CommentItem
                        key={rootComment.id}
                        comment={rootComment}
                        replies={getReplies(rootComment.id)}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        addComment={addComment}
                        deleteComment={deleteComment}
                        updateComment={updateComment}
                        currentUserId={currentUserId}
                    />
                ))}
            </div>
        </div>
    );
};

