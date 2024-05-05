import'./App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){

    return(
        <section className='App'>
        <TwitterFollowCard isFollowing userName="Manz" name="Manz 🇮🇨⚡👾"/>
        <TwitterFollowCard isFollowing userName="Whotfismick" name="☔"/>
        <TwitterFollowCard isFollowing userName="noelia_roura" name="Noelia Roura"/>
        </section>
    )
}