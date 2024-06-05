import { people } from "./components/componentQ1(2)"
import { getImageUrl } from "./components/componentQ1(1)"
import { recipes } from "./components/componentsQ2(1)"
import "./App.css"

function App() {
  const chemist = people.filter(person=>
    person.profession === 'chemist')
  const EveryoneElse =people.filter(person=>
    person.profession!=='chemist')  

  return (
    <>
     <article>
      <h2>Question No 1:</h2>
      <h1>Scientists</h1>
      <h2>Chemist</h2> 
      <ul>  {chemist.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>)}
      </ul>
        <h2>Everyone Else</h2> 
      <ul>  {EveryoneElse.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>)}
      </ul>
    </article>
    <hr/>

    <h2>Question No 2</h2>
    <div>
      <h1>Recipes</h1>
       {recipes.map((recipe) => {
      return (
        <div key={recipe.id}>
           <h2>Name: {recipe.name}</h2>
                    <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
            

          </div>
        );
    })}
    </div>
    </>
  )
}

export default App
