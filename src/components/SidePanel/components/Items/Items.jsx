import React from 'react';
// import './Items.css'

// import db from './db.json'
// import Image from './Image';

/* eslint-disable */
import IHome from '../../../../image/icons/SidePanel/Home.svg'
import IShop from '../../../../image/icons/SidePanel/Shop.svg'
import IHeart from '../../../../image/icons/SidePanel/Heart.svg'
import IBus from '../../../../image/icons/SidePanel/Bus.svg'
import IStickman from '../../../../image/icons/SidePanel/Stickman.svg'
import IHeal from '../../../../image/icons/SidePanel/Heal.svg'
import ICoffee from '../../../../image/icons/SidePanel/Coffee.svg'
import IError from '../../../../image/icons/SidePanel/Error.svg'
import ICastle from '../../../../image/icons/SidePanel/Castle.svg'
import IAirplane from '../../../../image/icons/SidePanel/airplane.svg'

function Items() {
    
  return (
    <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'center'}}>
      {/* {db.map(item => (
        <div key={item.id} style={{ height: 90, width: 120, background: "#a8a8a8", margin: "4%", borderRadius: 15, cursor: "pointer", display: 'flex', alignItems: 'center'}}>
          <div style={{ backgroundColor: "red", borderRadius: "100%", height: 15, width: 15, margin: "0 0 30% 10%" }}></div> */}
          {/* <Image imageData={[item]} /> */}
          
          {/* <p style={{ margin: "50% -10% 0", textAlign: 'center', fontSize: "14px" }}>{item.app}</p>
        </div>
      ))} */}

            {/* <div className='container'>
              <div className='point'>
                <p className='text'>Отели</p>
              </div>
            </div> */}

      <div  style={{ height: 90, width: 120, background: "#a8a8a8", margin: "4%", borderRadius: 15, cursor: "pointer", display: 'flex', alignItems: 'center'}}>
        <div style={{ backgroundColor: "#EB6C0F", borderRadius: "100%", height: 15, width: 15, margin: "0 0 30% 10%" }}></div>
        <img src={IHome} style={{ width: "20px", marginLeft: "-16px", marginTop: "-15px" }} />
        <p style={{ margin: "50% -10% 0", textAlign: 'center', fontSize: "14px" }}>Отели</p>
      </div>
      <div style={{ height: 90, width: 120, background: "#a8a8a8", margin: "4%", borderRadius: 15, cursor: "pointer", display: 'flex', alignItems: 'center'}}>
        <div style={{ backgroundColor: "#EBAE0F", borderRadius: "100%", height: 15, width: 15, margin: "0 0 30% 10%" }}></div>
        <img src={IShop} style={{ width: "20px", marginLeft: "-16px", marginTop: "-15px" }} />
        <p style={{ margin: "50% -10% 0", textAlign: 'center', fontSize: "14px" }}>Работа</p>
      </div>
      <div style={{ height: 90, width: 120, background: "#a8a8a8", margin: "4%", borderRadius: 15, cursor: "pointer", display: 'flex', alignItems: 'center'}}>
        <div style={{ backgroundColor: "#14EB0F", borderRadius: "100%", height: 15, width: 15, margin: "0 0 30% 10%" }}></div>
        <img src={IHeart} style={{ width: "20px", marginLeft: "-16px", marginTop: "-15px" }} />
        <p style={{ margin: "50% -10% 0", textAlign: 'center', fontSize: "14px" }}>Избранное</p>
      </div>
      <div style={{ height: 90, width: 120, background: "#a8a8a8", margin: "4%", borderRadius: 15, cursor: "pointer", display: 'flex', alignItems: 'center'}}>
        <div style={{ backgroundColor: "#0FEB9C", borderRadius: "100%", height: 15, width: 15, margin: "0 0 30% 10%" }}></div>
        <img src={IBus} style={{ width: "20px", marginLeft: "-16px", marginTop: "-15px" }} />
        <p style={{ margin: "50% -10% 0", textAlign: 'center', fontSize: "14px" }}>Маршруты</p>
      </div>
      <div style={{ height: 90, width: 120, background: "#a8a8a8", margin: "4%", borderRadius: 15, cursor: "pointer", display: 'flex', alignItems: 'center'}}>
        <div style={{ backgroundColor: "#0F9CEB", borderRadius: "100%", height: 15, width: 15, margin: "0 0 30% 10%" }}></div>
        <img src={IStickman} style={{ width: "20px", marginLeft: "-16px", marginTop: "-15px" }} />
        <p style={{ margin: "50% -10% 0", textAlign: 'center', fontSize: "14px" }}>Спортивные...</p>
      </div>
      <div style={{ height: 90, width: 120, background: "#a8a8a8", margin: "4%", borderRadius: 15, cursor: "pointer", display: 'flex', alignItems: 'center'}}>
        <div style={{ backgroundColor: "#4579DF", borderRadius: "100%", height: 15, width: 15, margin: "0 0 30% 10%" }}></div>
        <img src={IHeal} style={{ width: "20px", marginLeft: "-16px", marginTop: "-15px" }} />
        <p style={{ margin: "50% -10% 0", textAlign: 'center', fontSize: "14px" }}>Больницы</p>
      </div>
      <div style={{ height: 90, width: 120, background: "#a8a8a8", margin: "4%", borderRadius: 15, cursor: "pointer", display: 'flex', alignItems: 'center'}}>
        <div style={{ backgroundColor: "#9A38FB", borderRadius: "100%", height: 15, width: 15, margin: "0 0 30% 10%" }}></div>
        <img src={ICoffee} style={{ width: "20px", marginLeft: "-16px", marginTop: "-15px" }} />
        <p style={{ margin: "50% -10% 0", textAlign: 'center', fontSize: "14px" }}>Кафе</p>
      </div>
      <div style={{ height: 90, width: 120, background: "#a8a8a8", margin: "4%", borderRadius: 15, cursor: "pointer", display: 'flex', alignItems: 'center'}}>
        <div style={{ backgroundColor: "#C938FB", borderRadius: "100%", height: 15, width: 15, margin: "0 0 30% 10%" }}></div>
        <img src={IError} style={{ width: "20px", marginLeft: "-16px", marginTop: "-15px" }} />
        <p style={{ margin: "50% -10% 0", textAlign: 'center', fontSize: "14px" }}>Строитель...</p>
      </div>
      <div style={{ height: 90, width: 120, background: "#a8a8a8", margin: "4%", borderRadius: 15, cursor: "pointer", display: 'flex', alignItems: 'center'}}>
        <div style={{ backgroundColor: "#CB53BF", borderRadius: "100%", height: 15, width: 15, margin: "0 0 30% 10%" }}></div>
        <img src={ICastle} style={{ width: "20px", marginLeft: "-16px", marginTop: "-15px" }} />
        <p style={{ margin: "50% -10% 0", textAlign: 'center', fontSize: "14px" }}>Достопримеч...</p>
      </div>
      <div style={{ height: 90, width: 120, background: "#a8a8a8", margin: "4%", borderRadius: 15, cursor: "pointer", display: 'flex', alignItems: 'center'}}>
        <div style={{ backgroundColor: "#EF29B8", borderRadius: "100%", height: 15, width: 15, margin: "0 0 30% 10%" }}></div>
        <img src={IAirplane} style={{ width: "20px", marginLeft: "-16px", marginTop: "-15px" }} />
        <p style={{ margin: "50% -10% 0", textAlign: 'center', fontSize: "14px" }}>Порт</p>
      </div>
    </div>
  )
}

export default Items;