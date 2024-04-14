import React from 'react';
import smoothie_image from "../assets/images/project-smoothie.jpg";
import fashion_image from "../assets/images/project-fashion.jpg";
import project_multi_col from "../assets/images/project-multi-col.png";
import projet_crypto from "../assets/images/project-crypto-wallet.jpg";
import project_hero from "../assets/images/project-hero.png";
import portfolio_img from "../assets/images/portfolio.png";
// Composant réutilisable pour les cartes avec image
const CustomCard = ({ href, imgSrc, title, description }) => (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href={href}>
      <img src={imgSrc} alt="" className="w-full rounded-t-lg" /> {/* Utilisation de la classe w-full pour que l'image prenne toute la largeur */}
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      
    </div>
  </div>
);

// Composant BlogWeb simplifié
const BlogWeb = () => (
  <div className="bg-white py-24 sm:py-32">
    <div className="grid grid-cols-3 gap-4 px-20 py-20">
      {/* Card pour le portfolio */}
      <CustomCard href="https://magnanjules.github.io/portfolio/" imgSrc={portfolio_img} title="Portfolio" description="" />

      {/* Card pour la mode */}
      <CustomCard href="https://magnanjules.github.io/portfolio/fashion/index.html" imgSrc={fashion_image} title="Fashion Project" description="" />

      {/* Card pour les smoothies */}
      <CustomCard href="https://magnanjules.github.io/portfolio/smoothies/index.html" imgSrc={smoothie_image} title="Smoothie Project" description="" />

      <CustomCard href="https://magnanjules.github.io/portfolio/project-multi-column/index.html" imgSrc={project_multi_col} title="Project Multi Hero Column" description="" />
      <CustomCard href="https://magnanjules.github.io/portfolio/crypto-wallet/" imgSrc={projet_crypto} title="Crypto Wallet Project" description="" />

      <CustomCard href="https://magnanjules.github.io/portfolio/project-hero/index-1.html" imgSrc={project_hero} title="Hero Block Project" description="" />
    </div>
  </div>
);

export default BlogWeb;
