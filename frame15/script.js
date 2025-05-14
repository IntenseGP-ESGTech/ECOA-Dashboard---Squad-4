'use strict';

const { useState } = React;

const App = () => {
    const [videoError, setVideoError] = useState(false);

    return (
        <div className="app">
            {/* Header */}
            <header className="header">
                <span className="material-icons sidebar-toggle">menu</span>
                <div className="header-icons">
                    <span className="material-icons header-icon">notifications</span>
                    <span className="material-icons header-icon">account_circle</span>
                    <span className="material-icons header-icon">play_circle_filled</span>
                </div>
            </header>

            {/* Conteúdo Principal */}
            <div className="main-container">
                {/* Menu Lateral */}
                <aside className="sidebar">
                    <div className="menu-icon">
                        <i className="material-icons">account_circle</i>
                    </div>
                    <div className="menu-icon">
                        <i className="material-icons">notifications</i>
                    </div>
                    <div className="menu-icon">
                        <i className="material-icons">play_circle_filled</i>
                    </div>
                    <div className="menu-icon">
                        <i className="material-icons">message</i>
                    </div>
                </aside>

                {/* Player de Vídeo */}
                <main className="content">
                    <div className="video-container">
                        {videoError ? (
                            <div className="video-error">
                                <p>Vídeo indisponível para incorporação</p>
                                <a 
                                    href="https://www.youtube.com/watch?v=4TYv2PhG89A" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="youtube-link"
                                >
                                    Assistir no YouTube
                                </a>
                            </div>
                        ) : (
                            <div className="video-wrapper">
                                <iframe 
                                    src="https://www.youtube.com/embed/4TYv2PhG89A?enablejsapi=1&rel=0" 
                                    onError={() => setVideoError(true)}
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                    title="Sade - Smooth Operator"
                                ></iframe>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

// Renderização do React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
