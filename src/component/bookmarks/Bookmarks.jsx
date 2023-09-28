import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
  if (!bookmarks || !Array.isArray(bookmarks)) {
    return (
      <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
        <h1>No bookmarks available</h1>
      </div>
    );
  }
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div className='mb-4'>
                <h3 className="text-4xl">Reading Time: {readingTime} 
                minutes</h3>
            </div>
            <h2 className="text-3xl text-center mt-2  ">Bookmarked Blogs: {bookmarks.length}</h2>
            {
              bookmarks.map((bookmark) => (<Bookmark
              key ={bookmark.id}
              bookmark = {bookmark}
              ></Bookmark>))
            }
            
        </div>
  )
}
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks