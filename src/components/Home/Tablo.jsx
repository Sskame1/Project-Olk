import '../../style/tablo.css'

function Tablo({height, weight, children}) {
  return (
    <div className='CardMain' weight={weight} height={height} >
        {children}
    </div>
  )
}

export default Tablo