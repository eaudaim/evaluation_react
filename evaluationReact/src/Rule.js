import '../src/Rule.css'
import '../src/components/click'
import FavButton from '../src/components/click';

export default 


 
 function Rule(props) {
   const { rule } = props;
   const genres = rule.genres.map(genres => <span key={genres}>{genres}</span>);
   return (
<div className="color">
  <section >
    <div className="banniere">
    <img src={rule.images.banner} alt="banniere"></img>
    <h1>          {rule.title}
    </h1>
    <img src={rule.images.poster}></img>
      </div>
      <div><p>{rule.description}</p></div>
      <div>
        <div>
          <div>{genres}</div>
          <FavButton titleserie ={rule.title} favoris ={rule.user.favorited} id={rule.id}/>
            <div>
              
             
              
              
              
              
              
            </div>
          </div>
        </div>
</section>
</div>

   );

   
 }
 