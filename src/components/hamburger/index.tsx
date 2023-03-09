
const Hamburger = ({
    setIsOpen,
    isOpen,
    className
  }: any) => {
    // const [isOpen, setIsOpen] = useState(onOpen)
    const genericHamburgerLine = `h-1 w-8 m-1 rounded-full bg-black transition ease transform duration-300`;
  
    return (
      <div className={`fixed inset-0 z-[60] ${className} w-fit h-fit`}>
        <div className={`flex items-center m-4 md:hidden ${className}`}>
          <button
            className="flex flex-col md h-12 justify-center items-left group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${isOpen
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
              className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
              className={`${genericHamburgerLine} ${isOpen
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
                }`}
            />
          </button>
          {/* {
          isOpen ?
            <div
              className="transition ease transform cursor-pointer text-gray-300 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Close
            </div>
            : ""
        } */}
        </div>
      </div>
    )
  }
  
  export default Hamburger