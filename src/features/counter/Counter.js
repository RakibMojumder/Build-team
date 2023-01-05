import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counter.slice';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Counter = () => {
    const { count } = useSelector(state => state.counter);
    const { data, totalUsers } = useSelector(state => state.users.users);
    const totalPage = totalUsers / 20;
    const dispatch = useDispatch();

    return (
        <div className={`${data?.length > 19 ? "block" : "hidden"} mt-10`}>
            <div div className='w-48 mx-auto flex items-center justify-center'>
                <button onClick={() => dispatch(decrement())} className='text-xl text-teal-500' disabled={count < 0 ? true : false} >
                    <AiOutlineLeft />
                </button>
                <span className='text-lg mx-3'>{count + 1} / {totalPage}</span>
                <button onClick={() => dispatch(increment())} className='text-xl text-teal-500' disabled={count >= totalPage ? 1 : 0} >
                    <AiOutlineRight />
                </button>
            </div>
        </div>
    );
};

export default Counter; 