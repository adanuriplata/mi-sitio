import React from 'react';
import Nav from '../components/nav';
import cara from '../images/cara.jpg';
import { Link } from 'gatsby';

export default () => <div>
<Nav/>

<div className="container sm:block md:flex py-6">
  <div className="md:w-1/2 sm:w-auto text-white font-light text-gray-500 font-sans p-4 text-justify">
    <h1 className="font-mono text-2xl text-gray-300">Adan Uri Plata Estrada</h1>
    <p className="py-2 text-lg">
      Hello! I'm Brittany, a software engineer based in Boston, MA who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.
    </p>
    <p className="py-2 text-lg">
      Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.
    </p>
    <p className="py-2 text-lg"> Here are a few technologies I've been working with recently: </p>
    <ul className="text-sm grid grid-cols-2 text-green-400">
        <li className="py-1">* WordPress</li>
        <li className="py-1">* Javascript</li>
        <li className="py-1">* Google Adwords</li>
        <li className="py-1">* PHP</li>
        <li className="py-1">* Google Analytics</li>
        <li className="py-1">* Css</li>
    </ul>
  </div>
  <div className="md:w-1/2 sm:w-auto self-center">
    <div className="container-img">
      {/* <img src={cara} className="mx-auto h-40 p-2" /> */}
    </div>
  </div>
</div>

<div className="container py-20 text-center ">
  <h1 className="font-mono text-2xl text-gray-300 pb-12">Mi experiencia</h1>


  <div className="grid grid-cols-3 gap-4">

    <div className="jobs-content  text-right p-4 my-4">
      <div className="jobs-content__title text-lg uppercase py-2">
        <h3 className="text-green-400">Conektica Agencia Creativa</h3>
      </div>
      <div className="jobs-content__description text-gray-400">
        <p className="font-mono">2017 - 2019</p>
        <p>Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
        <p>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</p>
      </div>
    </div>

    <div className="p-4 my-4">
      
    </div>

    <div className="p-4 my-4">
      
    </div>

    <div className="p-4 my-4">
      
    </div>

    <div className="p-4 my-4">
      
    </div>

    <div className="jobs-content  text-left p-4 my-4">
      <div className="jobs-content__title text-lg uppercase py-2">
        <h3 className="text-green-400">Inmobiliaria Aguilar</h3>
      </div>
      <div className="jobs-content__description text-gray-400">
        <p className="font-mono">2017 - 2019</p>
        <p>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</p>
        <p>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</p>
      </div>
    </div>

  </div>

</div>




</div>