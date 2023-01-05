import React from 'react';
import { useSelector } from 'react-redux';
import Member from '../../components/Member';

const Team = () => {
    const { team, isLoading, error } = useSelector(state => state.team);

    if (isLoading) {
        return <h1>Loading...</h1>
    };


    if (error) {
        return <h1 className='text-3xl text-center mt-5'>{error}</h1>
    }

    return (
        <div>
            <h1 className='text-3xl text-white font-bold my-5 uppercase'>{team.length < 1 ? "No Team member added" : "Team Member"}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                {
                    team?.map(member => <Member key={member._id} member={member} />)
                }
            </div>
        </div>
    );
};

export default Team;