import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Не нашёл такой странницы</h2>
      <p>Возможно что то пошло не так</p>
      <Link href="/">Вернуться на главную странницу</Link>
    </div>
  )
}