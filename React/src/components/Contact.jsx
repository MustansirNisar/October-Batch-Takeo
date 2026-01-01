import Info from "./Info"

function Contact({name, age, country}){

    return (
        <>
        {/* <h1>This is the Contact Section: </h1>
        <h4>Name: {name}</h4>
        <h4>Age: {age}</h4>
        <h4>Country: {country}</h4> */}
        <Info name = {name} age = {age} country = {country} />
        </>
    )
}

export default Contact