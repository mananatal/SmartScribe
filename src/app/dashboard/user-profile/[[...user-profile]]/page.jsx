import { UserProfile } from '@clerk/nextjs'

const UserProfilePage = () => {
    return (
        <div className='flex  justify-center '>
            <UserProfile path="/dashboard/user-profile" />
        </div>
    )
}

export default UserProfilePage