import { Link } from '../../global_styled/link';
import { UlPage } from './styled';


function BodyPage ({repos, repoFilter, inputValue}) {
    return(
        <>
            {inputValue.length > 0 ? (
                <UlPage>
                    {repoFilter.map(repo =>(
                    <Link href={repo.clone_url} target='_blank' key={repo.id}>
                        <li>
                        {repo.name}
                        </li>
                    </Link>
                    ))}
                </UlPage>
                ) :
                <UlPage>
                    {repos.map(repo => (
                    <Link href={repo.clone_url} target='_blank' key={repo.id}>
                        <li>
                        {repo.name}
                        </li>
                    </Link>
                    ))}
                </UlPage>
            }
        </>
    )
}

export default BodyPage;