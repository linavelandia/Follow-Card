import {useState} from 'react'

export function TwitterFollowCard({userName, name }){
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing? 'siguiendo' : 'seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    const adddAT = (userName) => `@${userName}`
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`}alt="avatar persona" />
                <div className='tw-follorCard-info'>
                    <strong>{name}</strong>
                    <span className='.tw-follorCard-infoUsername'>{adddAT(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span></button>
            </aside>
        </article>
    )
}