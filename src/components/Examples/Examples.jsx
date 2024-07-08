import { useState } from "react"
import { EXAMPLES } from '../../data.js'
import TabButton from "../TabButton/TabButton.jsx"
import './Examples.css'

export default function Examples (){
  
  const [selectedTopic, setSelectedTopic] = useState(null)

  function handleSelect(selectedButton) {
    // console.log(selectedTopic)
    setSelectedTopic(selectedButton)
  }

  let content = (
    !selectedTopic ? (<p>Choose a topic</p>) 
    :(
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
      )
    )
  return (
    <section id="examples">
        <h2>Time to get started!</h2>
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected = {selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected = {selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected = {selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected = {selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
        {content}
    </section>
  )
}