const loadPlayers = () => {
    const searchBox = document.getElementById('search-box')
    const searchValue = searchBox.value
    if (searchValue == '') {
        alert('please input player name')
    }
    else {
        const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayPlayers(data.player))
        searchBox.value = ''
    }
}


const displayPlayers = players => {
    if (players == null) {
        alert('please input player name')
        return
    }
    for (const player of players) {
        // console.log(player)
        const main = document.getElementById('main')
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card my-4" style="width: 15rem;">
            <img src="${player.strThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${player.strPlayer}</h5>
                <p class="card-text">${player.strDescriptionEN.slice(0, 70)}</p>
                <button class="btn btn-success">Delete</button>
                <button onclick="playerDetails('${player.idPlayer}')" class="btn btn-success">Details</button>
            </div>
        </div>    
        `
        main.appendChild(div)
    }
}

const playerDetails = playerId => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayerDetails(data.players[0]))
}

const displayPlayerDetails = info => {
    console.log(info)
    if (info.strGender == 'Male') {
        document.getElementById('male').style.display = 'block'
        document.getElementById('female').style.display = 'none'
    }
    else {
        document.getElementById('male').style.display = 'none'
        document.getElementById('female').style.display = 'block'
    }
    document.getElementById('main2').innerHTML = `
    <div class="card my-4" style="width: 15rem;">
        <img src="${info.strThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${info.strPlayer}</h5>
            <p class="card-text">${info.strDescriptionEN.slice(0, 70)}</p>
        </div>
    </div>
    `

    // const div = document.createElement('div')

    // main2.appendChild(div)
}