import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className='searchForm'>
            <input type='text' placeholder='Find a User' />
        </div>
        <div className='userChat'>
            <img src='https://i.pinimg.com/736x/50/53/87/505387eec410eb22c31006fbb5255279.jpg' alt='user' />
            <div className='userChatInfo'>
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}

export default Search