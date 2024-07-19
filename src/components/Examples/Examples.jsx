import { useState } from "react"
import { EXAMPLES } from '../../data.js'
import TabButton from "../TabButton/TabButton.jsx"
import Section from "../Section/Section.jsx"
import './Examples.css'
import Tabs from "../Tabs/Tabs.jsx"

export default function Examples (){
  
  const [selectedTopic, setSelectedTopic] = useState(null)

  function handleSelect(selectedButton) {
    // console.log(selectedTopic)
    setSelectedTopic(selectedButton)
  }

  let content = (
    !selectedTopic 
    ? (<p>Choose a topic</p>) 
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
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
          <TabButton 
            isSelected = {selectedTopic === 'components'} 
            onClick={() => handleSelect('components')}
            >
              Components
          </TabButton>
          <TabButton 
          isSelected = {selectedTopic === 'jsx'} 
          onClick={() => handleSelect('jsx')}
          >got 
            JSX
          </TabButton>
          <TabButton 
          isSelected = {selectedTopic === 'props'}
          onClick={() => handleSelect('props')}
          >
            Props
          </TabButton>
          <TabButton
          isSelected = {selectedTopic === 'state'} 
          onClick={() => handleSelect('state')}
          >
            State
          </TabButton>
          </>
        }
      >
      {content}
      </Tabs>
    </Section>
  )
}