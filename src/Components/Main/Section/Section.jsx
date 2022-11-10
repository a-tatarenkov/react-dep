import React from "react";

const Section = () => {
    const params = {
        name: 'Alex',
        age: 25,
        address: {
            key: 'value'
        }
    }
    const handler = () => {
        alert('ololo')
    }
    const handlerForInput = () => {
        alert('Вы не заполнили')
    }

    return (
        <section>
            <button onClick={handler}>
                Click Me
            </button>
            <p>User, {params.name}, age - {params.age}. Address: {params.address.key}</p> :
            <input type="text" onChange={handlerForInput}/>
        </section>
    )
}

export default Section;