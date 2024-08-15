import Badge from '../ui/Badge'
import DotMenu from "../../assets/images/DotMenu.svg"
import PersonalComments from './PersonalComments'
import { useEffect, useState } from 'react'
import userStore from "../../stores/userStore"
import { useNavigate, Link } from 'react-router-dom'
import LoadingSpinner from "../ui/LoadingSpinner";

const ViewPostBody = ({ postId }) => {
    const getPostDetails = userStore((state) => state.getPostDetails);
    const postDetails = userStore((state) => state.postDetails);
    const username = userStore((state) => state.username);
    const likePost = userStore((state) => state.likePost);
    const getPostComments = userStore((state) => state.getPostComments);
    const commentPost = userStore((state) => state.commentPost);
    const postComments = userStore((state) => state.postComments);
    const getPublicProfile = userStore((state) => state.getPublicProfile);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPostDetails = async () => {
            setIsLoading(true);
            await getPostDetails(postId);
            await getPostComments(postId);
            setIsLoading(false);
        };

        fetchPostDetails();
    }, [postId, getPostComments, getPostDetails]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    const commentHandler = async (event) => {
        event.preventDefault();
        try {
            const comment = event.target.elements.commentInput.value;
            await commentPost(postId, comment);
            await getPostComments(postId);
            event.target.reset();
        } catch (error) {
            console.log(error);
        }
    }

    const likeHandler = async () => {
        try {
            await likePost(postId);
            await getPostDetails(postId);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex flex-col w-full h-full bg-white'>
            <div className='flex flex-row items-center border-solid border-x-2 px-8 py-4'>
                <Link 
                    to={postDetails?.authorDetails.username !== username 
                        ? `/user/profile-public/?u=${postDetails?.authorDetails.username}`
                        : '/user/profile'
                    } 
                    className="flex items-center gap-4"
                >
                    <div className="avatar">
                        <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-2">
                            <img src={postDetails?.authorDetails.profilePictureUrl} alt="" />
                        </div>
                    </div>
                    <b className='text-lg'>{postDetails?.authorDetails.username}</b>
                </Link>
                <div className='flex items-center ml-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
                        <circle cx="12" cy="9" r="3" />
                    </svg>
                    <b>{postDetails?.post.location}</b>
                </div>
            </div>

            <div className="w-full border-solid border-x-2">
                <img src={postDetails?.post.pictureUrl} alt="" className="object-cover w-full" />
            </div>

            <div className="flex flex-col w-full">
                <div className="flex justify-between items-center w-full py-5 px-5 text-gray-400 border-x-2">
                    <b className='text-black text-2xl'>{postDetails?.post.postTitle}</b>
                    <span>Published On {postDetails && new Date(postDetails.post.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex flex-col w-full px-5 border-x-2">
                    <p className="text-base mb-4">{postDetails?.post.postContent}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {postDetails?.post.PostTags.map((tag, index) => (
                            <Badge category={tag.name} key={index} />
                        ))}
                    </div>
                </div>
                <div className="flex items-center w-full p-5 border-x-2 border-b-2">
                    <button className="flex items-center mr-6" onClick={likeHandler}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-2"
                            fill={postDetails?.isLiked ? "red" : "none"}
                            viewBox="0 0 24 24"
                            stroke={postDetails?.isLiked ? "red" : "currentColor"}>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span className="font-bold">
                            {postDetails?.post.postLikes} {postDetails?.post.postLikes === 1 ? "Like" : "Likes"}
                        </span>
                    </button>
                    <div className="flex items-center mr-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 4h16c1.104 0 2 .896 2 2v12c0 1.104-.896 2-2 2H6l-4 4v-4H4c-1.104 0-2-.896-2-2V6c0-1.104.896-2 2-2z" />
                        </svg>
                        <span className="font-bold">{(postComments) ? postComments.length : 0} {postComments?.length === 1 ? "Comment" : "Comments"}</span>
                    </div>
                    {postDetails?.authorDetails.username !== username && (
                        <img src={DotMenu} alt="" className="w-8 ml-auto" />
                    )}
                </div>
                <form onSubmit={commentHandler} className="flex items-center w-full p-5 border-x-2 border-b-2">
                    <input
                        type="text"
                        name="commentInput"
                        placeholder="Type a comment"
                        className="input input-bordered bg-[#E6E6E6] flex-grow mr-4"
                    />
                    <button type="submit" className="btn btn-circle bg-[#7091E6] text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 9l18-6-7 18-3-9-8-3z" />
                        </svg>
                    </button>
                </form>
                { (postComments) ? postComments.map((comment, index) => (
                    <PersonalComments key={index} comment={comment} />
                )) : null}
            </div>
        </div>
    )
}

export default ViewPostBody