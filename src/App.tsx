import { useState, useEffect } from "react";

import Header from "./components/Header";
import IconCompany from "./components/IconCompany";
import "./styles/app.css";

import angularLogo from "./assets/images/angular-logo.png";
import flutterLogo from "./assets/images/flutter-logo.png";
import reactLogo from "./assets/images/react-logo.png";
import vueLogo from "./assets/images/vuejs-logo.png";

import googleIcon from "./assets/images/google-icon.svg";
import trivagoIcon from "./assets/images/trivago-icon.svg";
import sonyIcon from "./assets/images/sony-icon.svg";
import zoomIcon from "./assets/images/zoom-icon.svg";
import facebookIcon from "./assets/images/facebook-icon.svg";
import instagramIcon from "./assets/images/Instagram-icon.svg";
import discordIcon from "./assets/images/discord-icon.svg";
import airbnbIcon from "./assets/images/airbnb-icon.svg";
import ifoodIcon from "./assets/images/ifood-icon.svg";
import nubankIcon from "./assets/images/nubank-icon.svg";
import ebayIcon from "./assets/images/ebay-icon.svg";
import bmwIcon from "./assets/images/bmw-icon.svg";
import netflixIcon from "./assets/images/netflix-icon.svg";
import whatsappIcon from "./assets/images/whatsapp-icon.svg";
import microsoftIcon from "./assets/images/microsoft-icon.svg";
import paypalIcon from "./assets/images/paypal-icon.svg";
import ibmIcon from "./assets/images/ibm-icon.svg";

function App() {
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleToggle = () => {
    // Se parar, reinicia o contador
    if (isRunning) {
      setCount(0);
    }

    setIsRunning(!isRunning);
  };

  return (
    <div className="app-container">
      <Header />

      <section className="home section">
        <div className="home-images">
          <img src={angularLogo} className="angular-logo" alt="" />
          <img src={vueLogo} className="vue-logo" alt="" />
          <img src={reactLogo} className="react-logo" alt="" />
          <img src={flutterLogo} className="flutter-logo" alt="" />
        </div>
        <p className="home-slogan">
          Feito por Desenvolvedores, para Desenvolvedores
        </p>
        <h1 className="home-title">
          Tecnologias de <span className="gradient">Front-end</span> e <br />{" "}
          <span className="gradient">Frameworks</span> Modernos
        </h1>

        <p className="home-description">
          Uma análise dos frameworks e bibliotecas mais recentes <br /> para
          desenvolvimento web e mobile
        </p>
      </section>

      <section className="framework section" id="vuejs">
        <div className="section-title">
          <h2>Vue.js</h2>
          <p>web</p>
        </div>
        <div className="section-content">
          <div className="section-container-left">
            <div className="section-question">
              <p className="section-question-title">O que é o vue.js?</p>
              <p className="section-question-text">
                Vue.js, ou Vue, é um framework JavaScript progressivo para
                construção de interfaces de usuário. Criado por Evan You,
                destaca-se pela sintaxe declarativa semelhante a HTML,
                integração gradual em projetos existentes e eficiente
                reatividade automática. Com uma comunidade ativa e flexibilidade
                modular, o Vue é uma escolha popular para desenvolvedores que
                buscam uma solução ágil para interfaces interativas.
              </p>
            </div>
            <div className="section-question">
              <p className="section-question-title">Porque usar o vue.js?</p>
              <p className="section-question-text">
                O Vue. js é um dos frameworks que usa um DOM virtual para
                criação de interfaces, sendo um dos mais populares do mundo.
                Isso porque possui uma arquitetura bem estruturada, graças a
                componentes reutilizáveis. Outra vantagem dele é que para
                escrevê-lo basta conhecer JS, HTML e CSS.
              </p>
            </div>
          </div>
          <div className="section-container-right">
            <div className="sections-list">
              <p className="section-question-title">Vantagens</p>
              <ul className="section-list-content">
                <li className="section-list-item">
                  Sintaxe clara e declarativa
                </li>
                <li className="section-list-item">Integração progressiva</li>
                <li className="section-list-item">Reatividade eficiente</li>
              </ul>
            </div>
            <div className="sections-list">
              <p className="section-question-title">Desvantagens</p>
              <ul className="section-list-content">
                <li className="section-list-item">
                  Ecossistema menos abundante
                </li>
                <li className="section-list-item">
                  Menos uso em grandes empresas
                </li>
                <li className="section-list-item">
                  Menor comunidade em comparação com <br />
                  outros frameworks
                </li>
              </ul>
            </div>

            <div className="section-companies">
              <p className="section-question-title">
                Empresas que utilizam vue.js:
              </p>
              <div className="icon-companies">
                <IconCompany image={googleIcon} />
                <IconCompany image={trivagoIcon} />
                <IconCompany image={sonyIcon} />
                <IconCompany image={zoomIcon} />
              </div>
            </div>
          </div>
        </div>

        <div className="button-container">
          <a
            href="https://vuejs.org/guide/introduction.html"
            target="_blank"
            className="button-section"
          >
            Saiba mais
          </a>
          <div className="button-shadow" />
        </div>
      </section>

      <section className="framework section" id="angularjs">
        <div className="section-title">
          <h2>AngularJS</h2>
          <p>web</p>
        </div>
        <div className="section-content">
          <div className="section-container-left">
            <div className="section-question">
              <p className="section-question-title">O que é o angularJS?</p>
              <p className="section-question-text">
                Angular é um framework de javascript desenvolvido pela Google
                com o propósito de ser interativo e dinâmico. Essa tecnologia é
                baseada no typescript, o que permite a criação de interfaces de
                usuário complexas a partir de componentes melhor gerenciáveis,
                tornando assim o código mais fácil de se entender e manter.
              </p>
            </div>
            <div className="section-question">
              <p className="section-question-title">Porque usar o angularJS?</p>
              <p className="section-question-text">
                Além de permitir o desenvolvimento de aplicações web, mobile e
                desktop, essa tecnologia simplifica a codificação e o processo
                de testes das aplicações criadas a partir dele, tendo até mesmo
                correção automática de erros na fase de testes. O Angular JS
                também conta com uma comunidade forte e ativa com uma
                documentação extensa, tornando assim uma ótima tecnologia para
                iniciantes que querem iniciar a carreira como desenvolvedores
                front-end.
              </p>
            </div>
          </div>
          <div className="section-container-right">
            <div className="sections-list">
              <p className="section-question-title">Vantagens</p>
              <ul className="section-list-content">
                <li className="section-list-item">Facilitação de testes</li>
                <li className="section-list-item">Atualização automática</li>
                <li className="section-list-item">Fácil navegação</li>
              </ul>
            </div>
            <div className="sections-list">
              <p className="section-question-title">Desvantagens</p>
              <ul className="section-list-content">
                <li className="section-list-item">Break Change</li>
                <li className="section-list-item">Dificuldade de Migração</li>
                <li className="section-list-item">Sintaxe Complexa</li>
              </ul>
            </div>

            <div className="section-companies">
              <p className="section-question-title">
                Empresas que utilizam angularJS:
              </p>
              <div className="icon-companies">
                <IconCompany image={googleIcon} />
                <IconCompany image={microsoftIcon} />
                <IconCompany image={paypalIcon} />
                <IconCompany image={ibmIcon} />
              </div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <a
            href="https://angular.io/docs"
            target="_blank"
            className="button-section"
          >
            Saiba mais
          </a>
          <div className="button-shadow" />
        </div>
      </section>

      <section className="framework section" id="reactnative">
        <div className="section-title">
          <h2>React Native</h2>
          <p>mobile</p>
        </div>
        <div className="section-content">
          <div className="section-container-left">
            <div className="section-question">
              <p className="section-question-title">O que é o react native?</p>
              <p className="section-question-text">
                React Native (também conhecido como RN) é um framework de
                desenvolvimento de aplicativos móveis renderizados nativamente
                para iOS e Android. A estrutura permite criar um aplicativo para
                várias plataformas usando a mesma base de código.
              </p>
            </div>
            <div className="section-question">
              <p className="section-question-title">
                Porque usar o react native?
              </p>
              <p className="section-question-text">
                O React Native é escolhido no desenvolvimento de aplicativos
                móveis devido à capacidade de criar para iOS e Android usando
                JavaScript e React, compartilhando código entre plataformas. Ele
                utiliza JavaScript para renderizar componentes nativos,
                proporcionando uma experiência próxima ao nativo sem comprometer
                a performance. Com fácil acesso a recursos nativos, uma
                comunidade robusta e atualizações ágeis, o React Native
                destaca-se. A escolha entre React Native e outras tecnologias
                depende das necessidades do projeto, habilidades da equipe e
                requisitos específicos de desempenho e funcionalidade.
              </p>
            </div>
          </div>
          <div className="section-container-right">
            <div className="sections-list">
              <p className="section-question-title">Vantagens</p>
              <ul className="section-list-content">
                <li className="section-list-item">
                  Desenvolvimento mais rápido
                </li>
                <li className="section-list-item">
                  Ferramentas de depuração inteligentes
                </li>
                <li className="section-list-item">Acesso a recursos nativos</li>
              </ul>
            </div>
            <div className="sections-list">
              <p className="section-question-title">Desvantagens</p>
              <ul className="section-list-content">
                <li className="section-list-item">
                  Dependência de bibliotecas nativas
                </li>
                <li className="section-list-item">Curva de aprendizado</li>
                <li className="section-list-item">
                  Limitações de performance em casos <br /> específicos
                </li>
              </ul>
            </div>

            <div className="section-companies">
              <p className="section-question-title">
                Empresas que utilizam react native:
              </p>
              <div className="icon-companies">
                <IconCompany image={facebookIcon} />
                <IconCompany image={instagramIcon} />
                <IconCompany image={discordIcon} />
                <IconCompany image={airbnbIcon} />
              </div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <a
            href="https://reactnative.dev/docs/getting-started"
            target="_blank"
            className="button-section"
          >
            Saiba mais
          </a>
          <div className="button-shadow" />
        </div>
      </section>

      <section className="framework section" id="flutter">
        <div className="section-title">
          <h2>Flutter</h2>
          <p>mobile</p>
        </div>
        <div className="section-content">
          <div className="section-container-left">
            <div className="section-question">
              <p className="section-question-title">O que é o flutter?</p>
              <p className="section-question-text">
                Flutter é um kit de desenvolvimento de interface de usuário, de
                código aberto, criado pela empresa Google, baseado na linguagem
                de programação Dart, que possibilita a criação de aplicativos
                compilados nativamente, para os sistemas operacionais Android,
                iOS, Windows, Mac, Linux e Web
              </p>
            </div>
            <div className="section-question">
              <p className="section-question-title">Porque usar o flutter?</p>
              <p className="section-question-text">
                Flutter é uma escolha popular no desenvolvimento de aplicativos
                móveis. Sua abordagem cross-platform eficiente permite criar
                apps para iOS e Android a partir de um único código-base. A
                flexibilidade de design, desempenho consistente e a
                funcionalidade Hot Reload tornam o Flutter uma ferramenta
                atraente para desenvolvedores. Com amplo suporte da comunidade e
                da Google, o Flutter está se tornando cada vez mais uma opção
                preferida para projetos de aplicativos móveis.
              </p>
            </div>
          </div>
          <div className="section-container-right">
            <div className="sections-list">
              <p className="section-question-title">Vantagens</p>
              <ul className="section-list-content">
                <li className="section-list-item">
                  Desenvolvimento mais rápido
                </li>
                <li className="section-list-item">Desempenho consistente</li>
                <li className="section-list-item">
                  Interface de Usuário Altamente <br /> Personalizável
                </li>
              </ul>
            </div>
            <div className="sections-list">
              <p className="section-question-title">Desvantagens</p>
              <ul className="section-list-content">
                <li className="section-list-item">Tamanho do Aplicativo</li>
                <li className="section-list-item">Aprendizado Inicial</li>
                <li className="section-list-item">Ecossistema Menos Maduro</li>
              </ul>
            </div>

            <div className="section-companies">
              <p className="section-question-title">
                Empresas que utilizam flutter:
              </p>
              <div className="icon-companies">
                <IconCompany image={ifoodIcon} />
                <IconCompany image={nubankIcon} />
                <IconCompany image={ebayIcon} />
                <IconCompany image={bmwIcon} />
              </div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <a
            href="https://docs.flutter.dev/get-started/install"
            target="_blank"
            className="button-section"
          >
            Saiba mais
          </a>
          <div className="button-shadow" />
        </div>
      </section>

      <section className="framework section" id="react">
        <div className="section-title">
          <h2>ReactJS</h2>
          <p>mobile</p>
        </div>
        <div className="section-content">
          <div className="section-container-left">
            <div className="section-question">
              <p className="section-question-title">O que é o reactJS?</p>
              <p className="section-question-text">
                reactJS é um kit de desenvolvimento de interface de usuário, de
                código aberto, criado pela empresa Google, baseado na linguagem
                de programação Dart, que possibilita a criação de aplicativos
                compilados nativamente, para os sistemas operacionais Android,
                iOS, Windows, Mac, Linux e Web
              </p>
            </div>
            <div className="section-question">
              <p className="section-question-title">Porque usar o reactJS?</p>
              <p className="section-question-text">
                reactJS é uma escolha popular no desenvolvimento de aplicativos
                móveis. Sua abordagem cross-platform eficiente permite criar
                apps para iOS e Android a partir de um único código-base. A
                flexibilidade de design, desempenho consistente e a
                funcionalidade Hot Reload tornam o reactJS uma ferramenta
                atraente para desenvolvedores. Com amplo suporte da comunidade e
                da Google, o reactJS está se tornando cada vez mais uma opção
                preferida para projetos de aplicativos móveis.
              </p>
            </div>
          </div>
          <div className="section-container-right">
            <div className="sections-list">
              <p className="section-question-title">Vantagens</p>
              <ul className="section-list-content">
                <li className="section-list-item">
                  Desenvolvimento mais rápido
                </li>
                <li className="section-list-item">Desempenho consistente</li>
                <li className="section-list-item">
                  Interface de Usuário Altamente <br /> Personalizável
                </li>
              </ul>
            </div>
            <div className="sections-list">
              <p className="section-question-title">Desvantagens</p>
              <ul className="section-list-content">
                <li className="section-list-item">Tamanho do Aplicativo</li>
                <li className="section-list-item">Aprendizado Inicial</li>
                <li className="section-list-item">Ecossistema Menos Maduro</li>
              </ul>
            </div>

            <div className="section-companies">
              <p className="section-question-title">
                Empresas que utilizam reactJS:
              </p>
              <div className="icon-companies">
                <IconCompany image={facebookIcon} />
                <IconCompany image={instagramIcon} />
                <IconCompany image={netflixIcon} />
                <IconCompany image={whatsappIcon} />
              </div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <a
            href="https://legacy.reactjs.org/docs/getting-started.html"
            target="_blank"
            className="button-section"
          >
            Saiba mais
          </a>
          <div className="button-shadow" />
        </div>
      </section>
      <section className="framework section" id="react">
        <div className="section-title">
          <h2>Exemplo prático</h2>
          <p>reactJS</p>
        </div>
        <div className="section-content">
          <div
            className="section-container-left"
            style={{
              alignItems: "center",
              padding: 0,
            }}
          >
            <div className="section-counter">
              <p className="counter-title">Contador</p>
              <p className="counter-number">{count}</p>
              <div className="button-container example">
                <button className="button-section" onClick={handleToggle}>
                  {isRunning ? "Parar" : "Iniciar"}
                </button>
                <div className="button-shadow" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
