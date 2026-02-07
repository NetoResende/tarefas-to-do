import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import style from "./styles.module.css";
import { useEffect, useState } from "react";

type ThemeSelected = 'dark' | 'light' ;

export function Menu() {
  const [theme, setTheme] = useState<ThemeSelected>(()=>{
    const localStorageTheme = localStorage.getItem("theme" ) as ThemeSelected || 'dark'
    return localStorageTheme
  })

  function handlerThemeChange (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
    event.preventDefault();
    setTheme(state => {
      const newTheme = state === 'light' ? 'dark' : 'light';
      return newTheme;
    })
  }

  const SelectedThemeIcon = {
    dark: <SunIcon/>,
    light: <MoonIcon/>
  }

  useEffect(()=>{
    document.documentElement.setAttribute( 'data-theme', theme as ThemeSelected );
    localStorage.setItem("theme", theme)

    // return ()=>{  // limpar a sujeira da página antes de montar o componente novamente:
    //   console.log('Olha este componente será atualizado!'); // limpar as sujeira da página
    // }
  }, [theme])
  

  return (
    <nav className={style.menu}>
      <a href="##" className={style.menuLink}>
        < HouseIcon/>
      </a>
      <a href="##" className={style.menuLink}>
        <HistoryIcon/>
      </a>
      <a href="##" className={style.menuLink}>
        <SettingsIcon/>
      </a>
      <a 
        href="##" 
        className={style.menuLink}
        onClick={handlerThemeChange}
        >
        {SelectedThemeIcon[theme]}
      </a>
    </nav>
  );
}
