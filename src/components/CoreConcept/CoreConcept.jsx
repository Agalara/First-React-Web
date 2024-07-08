
//  export default function CoreConcept(props) {
//    return (
//      <li>
//        <img src={props.image} alt={props.title} />
//        <h3>{props.title}</h3>
//        <p>{props.description}</p>
//      </li>
//    )
//  }

// Podemos pasar a coreconcept de esta manera los objetos
// de manera que es mas directo de UserActivation. Usamos el nombre de
// las propiedades

export default function CoreConcept({image,title, description}) {
  return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
  )
}
{/* Dos maneras de usar los props: Guardandolos en un archivo externo como un array
de objetos (data.js) y pasandole la informacion a la funcion que trabaja con
los Props o directamente escribiendo la informacion a mano que se le mandaria
a la funcion que crea los componentes */}
{/* <CoreConcept 
title={CORE_CONCEPTS[0].title}
description={CORE_CONCEPTS[0].description}
image={CORE_CONCEPTS[0].images
/> */}
{/* <CoreConcept 
title={CORE_CONCEPTS[1].title}
description={CORE_CONCEPTS[1].description}
image={CORE_CONCEPTS[1].image}
/> */}
{/* Para extraer todas las propiedades de un objeto directamente*/}
{/* <CoreConcept
{...CORE_CONCEPTS[2]}
/> */}
{/* <CoreConcept
title="Components" 
description="The core UI building block."
image={componentsImg}
/>  */}
{/* Para transformar todos los elementos en CORE_CONCEPT automaticamente en un
componente <CoreConcept> Es la mejor manera de hacerlo por no tener que hacer manual
mente cada elemento. key={conceptItem.title} es necesario para que react identifique
cada elemento. Si no lo ponemos, funciona pero con error*/}