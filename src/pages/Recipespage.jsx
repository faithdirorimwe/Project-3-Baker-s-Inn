import RecipesAbout from "../components/RecipesAbout";
import RecipesHero from "../components/RecipesHero";
// import Recipies from "../components/Recipies";

const Recipespage = () => {
    return ( 
        <>
        <section id="recipes-hero">
        <RecipesHero/>
        </section>
        <section id="recipes">
            <RecipesAbout/>
        </section>
        </>
     );
}
 
export default Recipespage;