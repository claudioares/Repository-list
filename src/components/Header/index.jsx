import { Link } from '../../global_styled/link';
import icon_g_h from '../../assets/icon_gh.svg';
import icon_or_search from '../../assets/icon_or_search.svg';
import {
    Header, Img, InfoUser, InputHeader, IconSearch
} from './styled';

function HeaderPage ({
    avatarUser, 
    nameUser, 
    setNameUser, 
    handleSubmit, 
    linkUser
}) {


    return(
        <Header>
            <InfoUser>
                <InputHeader onSubmit={handleSubmit}>
                    <Img>
                        <img src={icon_g_h} alt='Icon github' />
                    </Img>
                    <input 
                        type="text" 
                        placeholder='Digite o nome de usuário...'
                        value={nameUser}
                        onChange={(e)=>setNameUser(e.target.value)}
                    />
                    <IconSearch>
                        <img src={icon_or_search} alt='icon icon_or_search' />
                    </IconSearch>
                </InputHeader>
                <Link href={linkUser} target='_blank'>
                    {linkUser && 
                        <>
                            <h3>Visite o perfil</h3>
                            <Img>
                                <img 
                                    src={avatarUser} 
                                    alt='imagem do usuario' 
                                />
                            </Img>
                        </>
                    }
                </Link>
            </InfoUser>
        </Header>
    )
}

export default HeaderPage;