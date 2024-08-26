import { useState, useEffect } from 'react';
import LoadingSpinner from "../ui/LoadingSpinner";
import staffStore from '../../stores/staffStore';
import TableRow from './TableRow';

const ReportManagementBody = () => {
    const [isLoading, setIsLoading] = useState(true);
    const getReportPost = staffStore((state) => state.getReportPost);
    const reportPost = staffStore((state) => state.reportPost);
    const getReportComment = staffStore((state) => state.getReportComment);
    const reportComment = staffStore((state) => state.reportComment);
    const [selectedOption, setSelectedOption] = useState('Post');
    const [currentHeaders, setCurrentHeaders] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const postHeaders = ['ID', 'User', 'Report Content', 'Post Link', 'Created At', 'Status', 'Action'];
    const commentHeaders = ['ID', 'User', 'Report Content', 'Comment Link', 'Created At', 'Status', 'Action'];

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                if (selectedOption === 'Post'){
                    setIsLoading(true);
                    await getReportPost();
                    console.log(reportPost);
                    setCurrentHeaders(postHeaders);
                    setCurrentData(reportPost);
                    setIsLoading(false);
                }
                else if(selectedOption === 'Comment'){
                    setIsLoading(true);
                    await getReportComment();
                    console.log(reportComment);
                    setCurrentHeaders(commentHeaders);
                    setCurrentData(reportComment);
                    setIsLoading(false);
                }
                else if(selectedOption === 'User'){
                    setIsLoading(true);
                    await getReportUser();
                    console.log(reportUser);
                    setCurrentHeaders(userHeaders);
                    setCurrentData(reportUser);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchPostDetails();
    }, [getReportPost, selectedOption]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <div className="join mb-4">
                <input
                    className="join-item btn"
                    type="radio"
                    name="options"
                    aria-label="Post"
                    checked={selectedOption === 'Post'}
                    onChange={() => handleOptionChange('Post')}
                />
                <input
                    className="join-item btn"
                    type="radio"
                    name="options"
                    aria-label= "Comment"
                    checked={selectedOption === 'Comment'}
                    onChange={() => handleOptionChange('Comment')}
                />
                <input
                    className="join-item btn"
                    type="radio"
                    name="options"
                    aria-label= "User"
                    checked={selectedOption === 'User'}
                    onChange={() => handleOptionChange('User')}
                />
            </div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className='overflow-x-auto bg-white h-full w-full flex flex-col justify-start p-6 items-center'>
                <table className='table w-full my-12 p-20 rounded-xl'>
                    <thead className='bg-blue-400'>
                        <tr>
                            {currentHeaders.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData
                        .sort((a, b) => a.id - b.id)
                        .map((item) => {
                            return (
                                <TableRow
                                    key={item.id}
                                    item={item}
                                    selectedOption={selectedOption}
                                />
                            )
                        })}
                    </tbody>
                </table>
                </div>              
            )}
        </div>
    );
};

export default ReportManagementBody;