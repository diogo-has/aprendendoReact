import style from './App.module.css'
import Card from './components/Card'
import img1 from "./assets/img/img1.jpg"
import img2 from "./assets/img/img2.jpg"
import img3 from "./assets/img/img3.webp"

function App() {
  return (
    <div className={style.section1}>
      <Card
        title='Paisage'
        image={img1}
        text1='birolaro'
        text2='8329472943'
      />
      <Card
        title='Paisage2'
        image={img2}
        text1='birolaro'
        text2='8329472943'
      />
      <Card
        title='Paisage2'
        image={img3}
        text1='birolaro'
        text2='8329472943'
      />
    </div>
  )
}

export default App