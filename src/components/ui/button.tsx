const Button = ({classname}: { classname?: string }) => {
    return (
        <div className={`${classname}`}>
            <button
                className="flex items-center justify-start  gap-2 px-3 h-[40px] bg-[#A1FF14] text-[#131313] font-semibold rounded-[30px] border-none shadow-[5px_5px_10px_rgba(0,0,0,0.116)] transition-transform duration-200 cursor-pointer hover:bg-[#C0FF14] active:scale-95">
                <svg
                    className="h-[25px] transition-transform duration-[1.5s] hover:rotate-[250deg]"
                    viewBox="0 0 512 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
                </svg>
                Play
            </button>
        </div>
    );
};

export default Button;