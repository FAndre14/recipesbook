import "./recipe.css";

const Recipe = ({name, picture, counter}) => {
  return (
    <div key={counter} className="container container__recipe">
        <img src={require(`../../assets/recipes/${picture}.jpg`)} alt={name} />
        <div>
          <h1>{name}</h1>
          <h4>Click for details!</h4>
        </div>
    </div>
  )
}
 export default Recipe;