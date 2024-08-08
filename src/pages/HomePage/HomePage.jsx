import '../../style/bobik.css'
import Tablo from '../../components/Home/Tablo'
import { Card } from '../../components/Home/Card'

function HomePage() {
  return (
    <div className='Home'>
      <div className="Main">
        <div className="Main__main">
        <Tablo title={'Афиша'}>
            <Card img={'https://w0.peakpx.com/wallpaper/472/767/HD-wallpaper-error-glitch.jpg'} title={'Error'} desc={'Error desc'} />
            <Card img={'https://w0.peakpx.com/wallpaper/472/767/HD-wallpaper-error-glitch.jpg'} title={'Error'} desc={'Error desc'} />
            <Card img={'https://w0.peakpx.com/wallpaper/472/767/HD-wallpaper-error-glitch.jpg'} title={'Error'} desc={'Error desc'} />
            <Card img={'https://w0.peakpx.com/wallpaper/472/767/HD-wallpaper-error-glitch.jpg'} title={'Error'} desc={'Error desc'} />
            <Card img={'https://w0.peakpx.com/wallpaper/472/767/HD-wallpaper-error-glitch.jpg'} title={'Error'} desc={'Error desc'} />
            <Card img={'https://w0.peakpx.com/wallpaper/472/767/HD-wallpaper-error-glitch.jpg'} title={'Error'} desc={'Error desc'} />
            <Card img={'https://w0.peakpx.com/wallpaper/472/767/HD-wallpaper-error-glitch.jpg'} title={'Error'} desc={'Error desc'} />
            <Card img={'https://w0.peakpx.com/wallpaper/472/767/HD-wallpaper-error-glitch.jpg'} title={'Error'} desc={'Error desc'} />
            <Card img={'https://w0.peakpx.com/wallpaper/472/767/HD-wallpaper-error-glitch.jpg'} title={'Error'} desc={'Error desc'} />
          </Tablo>
        </div>
        <div className="Main_sidebord">
          sidebord
        </div>  
      </div>
    </div>
  )
}

export default HomePage