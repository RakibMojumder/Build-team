import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';
import User from '../../components/User';
import { fetchUsers } from './users.slice';

const Users = () => {
    const { error, isLoading, users } = useSelector(state => state.users);

    const { count } = useSelector(state => state.counter)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers({ count }))
    }, [count, dispatch]);

    if (isLoading) {
        return <Spinner />
    }

    if (error) {
        return <h1 className='text-2xl text-white text-center mt-5'>{error}</h1>
    }

    if (users?.data?.length < 1) {
        return <h1 className='text-2xl text-white text-center mt-5'>No result found</h1>
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            {
                users?.data?.map(user => <User key={user?._id} user={user} />)
            }
        </div>
    );
};

export default Users;