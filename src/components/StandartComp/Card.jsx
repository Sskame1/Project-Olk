import '../../style/Card.css'

export const Card = ({ img, title, desc }) => {
  return (
    <div className='Card'>
        <img className='Card__image' src={img} alt="Картинка" />
        <p>{title}</p>
        <span>{desc}</span>
    </div>
  );
};

export const CardMini = () => {
    return (
        <div className='CardMini'>

        </div>
    );
};