import Link from "next/link";

const Button = ({classname, href, children, txt1, txt}: {
    classname?: string,
    href: string,
    txt1?: string,
    txt: string,
    children?: React.ReactNode
}) => {
    return (
        <div className={`${classname}`}>
            <Link
                href={href}
                className="flex items-center justify-start  gap-2 px-3 h-[40px] bg-[#A1FF14] text-[#131313] font-semibold rounded-[30px] border-none shadow-[5px_5px_10px_rgba(0,0,0,0.116)] transition-transform duration-200 cursor-pointer hover:bg-[#C0FF14] active:scale-95">
                {txt1}
                {children}
                {txt}
            </Link>
        </div>
    );
};

export default Button;