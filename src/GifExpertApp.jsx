import { useState } from "react"
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Kimetsu']);

    const onAddCategory = (newCategory) =>{


        if( categories.includes(newCategory) ) return;


        console.log(newCategory);
        //categories.push(NewCategory);
        setCategories( [ newCategory,...categories ] );
        //setCategories(categories=> [...categories,"Valorant"]);
    }
    
    return (
    <>
        <h1>GifExpertApp</h1>
    
        <AddCategory 
            //setCategories={ setCategories } 
            onNewCategory={ (value) => onAddCategory(value) }

        />
        
        {
            categories.map( (category) =>(
                <GifGrid 
                    key={ category } 
                    category={category}
                />
            ))
        }

        



    </>
    )
}

