import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios';
import Header from "../components/Header/index";
import { 
  HomePage,
  InputHome,
  DivError
} from './styled';
import BodyPage from '../components/BodyPage';


function Home() {
  const [ nameUser, setNameUser ]=useState('');
  const [ avatarUser, setAvatarUser ] = useState ('');
  
  const [ repos, setRepos ] = useState([]);
  const [ inputValue, setInputValue ] = useState('');
  const [ linkUser, setLinkUser ] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      axios.get(`https://api.github.com/users/${nameUser}/repos`)
      .then(response => {
        setRepos(response.data)
        setAvatarUser(response.data[0].owner.avatar_url)
        setLinkUser(response.data[0].owner.html_url)

      })
    
    } catch (error) {
        console.log(error)
    }

    setNameUser('');
  }
  


  const repoFilter = inputValue.length > 0
    ? repos.filter(repo => repo.name.includes(inputValue))
    : [];
  
    
  return (
    <HomePage>
  
      <Header
        avatarUser={avatarUser}
        nameUser={nameUser}
        setNameUser={setNameUser}
        handleSubmit={handleSubmit}
        linkUser={linkUser}
      />
      {linkUser && <InputHome 
        type='text'
        className='input'
        placeholder='Digite...'
        onChange={(e)=>setInputValue(e.target.value)}
        value={inputValue}
      />}
      {linkUser && <BodyPage
        repos={repos}
        repoFilter={repoFilter}
        inputValue={inputValue}
      />}
    </HomePage>
  )
}

export default Home;
