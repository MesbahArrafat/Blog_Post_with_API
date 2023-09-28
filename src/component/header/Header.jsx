import profile from '../../assets/images/profile.webp'
const Header = () =>{
    return(
        <header className='flex justify-between items-center p-4 border-b-2  max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold'>Blog Post With API</h1>
        <img className='h-[50px] w-[80px]' src={profile} alt="" />
    </header>
    )
};
export default Header;