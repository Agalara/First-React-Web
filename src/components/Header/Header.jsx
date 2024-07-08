import reactImg from '../../assets/react-core-concepts.png';
import './Header.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core', 'Basic', 'Foundations'];

function randomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
  const description = reactDescriptions[randomInt(reactDescriptions.length)]
  return (
    <header>
      <img src= {reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
      {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
};