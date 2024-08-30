import React from 'react'
import Ad from '../../components/Ad/Ad'
import AfishaTablo from '../../components/AfishaComp/AfishaTablo'
import '../../style/AfishaTabloId.css'

export default function AfishaPageId() {
  return (
    <div>
        <div className="Main">
            <div className="Main__main">
                <AfishaTablo >
                    <div className="container">
                        <img src="https://i.pinimg.com/736x/47/fc/f2/47fcf21bdc163aca0f4b4be1199fa6c6.jpg" alt="Постер" />
                        <div className="container__info">
                            <div className="title">Evangelion neon genesis</div>
                            <div className="year">Год: 99999</div>
                            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quasi? Cumque consectetur vero delectus perspiciatis praesentium molestiae vel fugiat accusamus.</div>
                        </div>
                    </div>
                </AfishaTablo>
            </div>
            <div className="Main_sidebord">
                <Ad />
            </div>
        </div>
    </div>
  )
}
