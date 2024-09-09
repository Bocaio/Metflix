export default function ButtonForOpen ({isOpen,setIsOpen}) {
    return  <button
    className="btn-toggle"
    onClick={() => setIsOpen((open) => !open)}
  >
    {isOpen ? "–" : "+"}
  </button>
}