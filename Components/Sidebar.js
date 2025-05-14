import React from 'react';
import '../App.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu-item" title="Perfil">
        <i className="fas fa-user"></i>
      </div>
      <div className="menu-item" title="Identificação">
        <i className="fas fa-id-card"></i>
      </div>
      <div className="menu-item" title="Projetos">
        <i className="fas fa-project-diagram"></i>
      </div>
      <div className="menu-item" title="Documentos">
        <i className="fas fa-file-alt"></i>
      </div>
      <div className="menu-item" title="Habilidades">
        <i className="fas fa-chess-knight"></i>
      </div>
    </div>
  );
};

export default Sidebar;
