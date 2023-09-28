import { useState } from 'react'
import './App.css'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/bookmarks/bookmarks'
import Header from './component/header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);
  const handleAddBookmark = blog =>{
   const newBookmarks = [...bookmarks,blog];
   setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)

  }

  return (
    <>
   <div>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
        <Blogs
        handleAddBookmark={handleAddBookmark}
        handleMarkAsRead = {handleMarkAsRead}
        ></Blogs>
        <Bookmarks
        bookmarks={bookmarks}
        readingTime={readingTime}
        ></Bookmarks>
      </div>
     
   </div>
    </>
  )
}

export default App
