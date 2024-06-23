import React from 'react';

function Header({ title }) {
  return (
    <header>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="banner">
        <img src="https://img.freepik.com/vetores-gratis/fundo-de-dia-internacional-de-enfermeiras-desenhadas-a-mao_23-2149341238.jpg" alt="Banner" />
      </div>
    </header>
  );
}

export default Header;
