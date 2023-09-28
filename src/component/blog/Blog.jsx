import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleAddBookmark,handleMarkAsRead}) => {
    const {title,Cover,Author_img,Reading_Time,Author,Posted_Time,Hashtags} = blog;
    return (
        <div className='mb-20  space-y-4'>
            <img className='w-full mb-8' src={Cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={Author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{Author}</h3>
                        <p>{Posted_Time}</p>
                    </div>
                </div>
                <div>
                    <span>{Reading_Time} read</span> <br/> 
                    <button
                    onClick={()=>handleAddBookmark(blog)}
                    className='text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
              {
                Hashtags.map((hash,idx) => <span key={idx}><a href=''>{hash}</a></span>)
              }
            </p>
            <button className='text-purple-600 font-bold underline'
            onClick={()=> handleMarkAsRead(Reading_Time)}
            >Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func,
}
export default Blog;
