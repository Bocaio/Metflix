const Menu = ({setDarkMode,darkMode,closeMyModal}) => {
    const changemode = () => {
        setDarkMode(prev => !prev);
        closeMyModal()
      }
    
    return <div>
        <i onClick={changemode} style={{fontSize : 'xx-large',color : '#FF8F00', cursor : 'pointer'}} className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
    </div>
}

export default Menu;