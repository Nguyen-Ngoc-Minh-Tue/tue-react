import React from 'react';
import Textfield from "@atlaskit/textfield"
import Button from '@atlaskit/button';
import { useState } from 'react';
import SearchList from './components/SearchList';


function App() {
  const [textInput, setTextInput] = useState('')
  const [searchList, setSearchList] = useState([])

  const onTextInputChange = (e) => {
    setTextInput(e.target.value)
  }
  const onFindBtnClick = () => {
    setSearchList(state => [textInput])
    setTextInput("")
  }
  console.log(searchList)
  return (
    <div>
      <h3>Search package</h3>
      <Textfield
        name='search-package'
        placeholder='Search package'
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance="primary"
            onClick={onFindBtnClick}
          >
            Search
          </Button>
        }
        css={{ padding:'2px 4px 2px'}}
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>
      <SearchList searchList={searchList} />
    </div>
  );
}

export default App;
