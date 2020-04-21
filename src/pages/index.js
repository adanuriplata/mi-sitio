import React from "react"
import Nav from '../components/nav'

export default () => <div>
<Nav/>
    <div>
        <h1 className="font-mono text-2xl text-gray-300 p-12 text-center">Blog</h1>
    </div>
    <div className="prev-blog text-white w-1/3 text-gray-300 bg-green-900 m-2 p-6">
        <div className="prev-blog__img"></div>
        <div className="prev-blog__data">
            <div className="prev-blog__data__container__data flex justify-between text-xs py-2">
                <div className="prev-blog__data__container__data__tag">Svelte, Javascript, Conference</div>
                <div className="prev-blog__data__container__data__date">27 March 2020</div>
            </div>
            <div className="prev-blog__data__container__title text-xl py-2">¿Que es Svelt?</div>
            <div className="prev-blog__data__container__content py-1">Charla para Eventloop MX, miercoles 4 de Marzo del 2019 en la ciudad  de México. Svelte un n...</div>
        </div>
    </div>
</div>


