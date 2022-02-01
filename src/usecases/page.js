

const getMonsters = (handleRecieveData) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => handleRecieveData(users))  
}

const filterMonsters = (monsters, searchField) => {
    const filteredMonsters = monsters.filter(monster => {
        return monster.name.toLowerCase().includes(searchField.toLowerCase())
      });
    return filteredMonsters
}



export const page =  {
    getMonsters,
    filterMonsters
}
