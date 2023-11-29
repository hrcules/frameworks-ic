import { MouseEvent } from "react";

import "./styles.css";

const Header = () => {
  const handleScroll = (event: MouseEvent<HTMLAnchorElement>) => {
    // Impede o comportamento padrão do link
    event.preventDefault();

    // Obtém o destino do link a partir do href
    const targetId = (event.currentTarget.getAttribute("href") || "").substring(
      1
    );
    const targetElement = document.getElementById(targetId);

    // Verifica se o elemento de destino existe
    if (targetElement) {
      // Calcula a nova posição de rolagem
      const newPosition = targetElement.offsetTop - 8 * 16; // 5rem convertidos para pixels (considerando 1rem = 16 pixels)

      // Rola suavemente para a nova posição
      window.scrollTo({
        top: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="header-container">
      <h3 className="header-title">
        <a href="/">FRAMEWORKS</a>
      </h3>

      <div className="header-menu">
        <a
          href="#vuejs"
          onClick={(e) => handleScroll(e)}
          className="header-menu-item"
        >
          Vue.js
        </a>
        <a
          href="#angularjs"
          onClick={(e) => handleScroll(e)}
          className="header-menu-item"
        >
          AngularJS
        </a>
        <a
          href="#reactnative"
          onClick={(e) => handleScroll(e)}
          className="header-menu-item"
        >
          React Native
        </a>
        <a
          href="#flutter"
          onClick={(e) => handleScroll(e)}
          className="header-menu-item"
        >
          Flutter
        </a>
        <a
          href="#react"
          onClick={(e) => handleScroll(e)}
          className="header-menu-item"
        >
          React
        </a>
      </div>
    </nav>
  );
};

export default Header;
