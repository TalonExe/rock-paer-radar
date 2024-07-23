import Navbar from '../Navbar'
import ContentLayout from './ContentLayout'

const UserLayout = ({ children }) => {
    return (
        <div className="flex flex-row w-full h-screen scrollbar-hidden ">
            <Navbar />
            <ContentLayout>
                {children}
            </ContentLayout>
        </div>

    )
}

export default UserLayout
