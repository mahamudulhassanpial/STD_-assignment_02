
const players = [
    {
        id: 1,
        name: "Josefine",
        gender: "female",
        city: "Samsø",
        country: "Denmark",
        phone: "56694413",
        email: "josefine.andersen@example.com",
        salary : "70000$",
        sport : "football",
        social : "www.facebook.com/dannywelbeck",
        discription: "Daniel Nii Tackie Mensah Welbeck (born 26 November 1990) is an English professional footballer.",
        guider: false,
        imageUrl: "https://www.thesportsdb.com/images/media/player/fanart/wyyyvv1421251691.jpg"
    },
    {
        id: 2,
        name: "Malo",
        gender: "male",
        city: "Avignon",
        country: "France",
        phone: "05-98-63-27-75",
        email: "malo.aubert@example.com",
        salary : "70000$",
        sport : "football",
        social : "www.facebook.com/dannywelbeck",
        discription: "Daniel Nii Tackie Mensah Welbeck (born 26 November 1990) is an English professional footballer.",
        guider: false,
        imageUrl: "https://www.thesportsdb.com/images/media/player/fanart/rxwwpq1421251811.jpg"
    },
    {
        id: 3,
        name: "Luna",
        gender: "female",
        city: "Orleans",
        country: "France",
        phone: "03-72-19-95-01",
        email: "luna.durand@example.com",
        salary : "70000$",
        sport : "football",
        social : "www.facebook.com/dannywelbeck",
        discription: "Daniel Nii Tackie Mensah Welbeck (born 26 November 1990) is an English professional footballer.",
        guider: true,
        imageUrl: 	"https://www.thesportsdb.com/images/media/player/fanart/wyyyvv1421251691.jpg"
    },
    {
        id: 4,
        name: "Caitlin",
        gender: "female",
        city: "Leicester",
        country: "United Kingdom",
        phone: "017687 54282",
        email: "caitlin.lopez@example.com",
        salary : "70000$",
        sport : "football",
        social : "www.facebook.com/dannywelbeck",
        discription: "Daniel Nii Tackie Mensah Welbeck (born 26 November 1990) is an English professional footballer.",
        guider: true,
        imageUrl: "https://www.thesportsdb.com/images/media/player/cutout/pr0quu1725369088.png"
    },
    {
        id: 5,
        name: "lors",
        gender: "female",
        city: "Orleans",
        country: "France",
        phone: "03-72-19-95-01",
        email: "luna.durand@example.com",
        salary : "70000$",
        sport : "football",
        social : "www.facebook.com/dannywelbeck",
        discription: "Daniel Nii Tackie Mensah Welbeck (born 26 November 1990) is an English professional footballer.",
        guider: true,
        imageUrl: "https://www.thesportsdb.com/images/media/player/fanart/rxwwpq1421251811.jpg"
    },
    {
        id: 6,
        name: "zdda",
        gender: "female",
        city: "Orleans",
        country: "France",
        phone: "03-72-19-95-01",
        email: "luna.durand@example.com",
        salary : "70000$",
        sport : "football",
        social : "www.facebook.com/dannywelbeck",
        discription: "Daniel Nii Tackie Mensah Welbeck (born 26 November 1990) is an English professional footballer.",
        guider: false,
        imageUrl: "https://www.thesportsdb.com/images/media/player/cutout/pr0quu1725369088.png"
    },
    {
        id: 7,
        name: "Xavi",
        gender: "male",
        city: "Orleans",
        country: "France",
        phone: "03-72-19-95-01",
        email: "luna.durand@example.com",
        salary : "70000$",
        sport : "football",
        social : "www.facebook.com/dannywelbeck",
        discription: "Daniel Nii Tackie Mensah Welbeck (born 26 November 1990) is an English professional footballer.",
        guider: false,
        imageUrl: "https://www.thesportsdb.com/images/media/player/fanart/wxsvwy1421251764.jpg"
    },
    {
        id: 8,
        name: "Messi",
        gender: "male",
        city: "Orleans",
        country: "France",
        phone: "03-72-19-95-01",
        email: "luna.durand@example.com",
        salary : "70000$",
        sport : "football",
        social : "www.facebook.com/dannywelbeck",
        discription: "Daniel Nii Tackie Mensah Welbeck (born 26 November 1990) is an English professional footballer.",
        guider: false,
        imageUrl: "https://www.thesportsdb.com/images/media/player/render/7qml2m1559215903.png"
    },
    {
        id: 9,
        name: "pedri",
        gender: "female",
        city: "Orleans",
        country: "France",
        phone: "03-72-19-95-01",
        email: "luna.durand@example.com",
        salary : "70000$",
        sport : "football",
        social : "www.facebook.com/dannywelbeck",
        discription: "Daniel Nii Tackie Mensah Welbeck (born 26 November 1990) is an English professional footballer.",
        guider: false,
        imageUrl: "https://www.thesportsdb.com/images/media/player/banner/qcg2q41557497979.jpg"
    },
    {
        id: 10,
        name: "alex",
        gender: "male",
        city: "Orleans",
        country: "France",
        phone: "03-72-19-95-01",
        email: "luna.durand@example.com",
        salary : "70000$",
        sport : "football",
        social : "www.facebook.com/dannywelbeck",
        discription: "Daniel Nii Tackie Mensah Welbeck (born 26 November 1990) is an English professional footballer.",
        guider: false,
        imageUrl: 	"https://www.thesportsdb.com/images/media/player/fanart/wyyyvv1421251691.jpg"
    },
    {
        id: 11,
        name: "qweqx",
        gender: "male",
        city: "Orleans",
        country: "France",
        phone: "03-72-19-95-01",
        email: "luna.durand@example.com",
        salary : "70000$",
        sport : "football",
        social : "www.facebook.com/dannywelbeck",
        discription: "Daniel Nii Tackie Mensah Welbeck (born 26 November 1990) is an English professional footballer.",
        guider: false,
        imageUrl: "https://www.thesportsdb.com/images/media/player/fanart/vvyyts1421251700.jpg"

    },
    {
        id: 12,
        name: "were",
        gender: "male",
        city: "Orleans",
        country: "France",
        phone: "03-72-19-95-01",
        email: "luna.durand@example.com",
        salary : "70000$",
        sport : "football",
        social : "www.facebook.com/dannywelbeck",
        discription: "Daniel Nii Tackie Mensah Welbeck (born 26 November 1990) is an English professional footballer.",
        guider: false,
        imageUrl: "https://www.thesportsdb.com/images/media/player/fanart/wxsvwy1421251764.jpg"
    },

];

let group = [];
let totalMembers = 0;
let totalFemale = 0;
let totalMale = 0;

function displayPlayers(filteredPlayers = players) {
    const playersList = document.getElementById('players-list');
    playersList.innerHTML = '';

    filteredPlayers.forEach(player => {
        const card = document.createElement('div');
        card.classList.add('player-card');
        card.innerHTML = `
            <img src="${player.imageUrl}" alt="${player.name}">
            <h3>${player.name}</h3>
            <p><strong>Phone:</strong> ${player.phone}</p>
            <p><strong>Email:</strong> ${player.email}</p>
            <p><strong>City:</strong> ${player.city}</p>
            <p><strong>Country:</strong> ${player.country}</p>
            <p><strong>salary:</strong> ${player.salary}</p>
            <p><strong>sport:</strong> ${player.sport}</p>
            <p><strong><i class="fa-brands fa-facebook"></i> :</strong> ${player.social}</p>
            <p><strong>Gender:</strong> ${player.gender}</p>
            <button class="${group.includes(player.name) ? 'added' : ''}" onclick="addToGroup('${player.name}')">${group.includes(player.name) ? 'Already Added' : 'Add to group'}</button>
            <button onclick="showDetails('${player.name}')">Details</button>
        `;
        playersList.appendChild(card);
    });
}

function displayGuiders() {
    const guidersList = document.getElementById('guiders-list');
    guidersList.innerHTML = '';

    const guiders =  players.filter(player => player.guider);
    guiders.forEach(guider => {
        const card = document.createElement('div');
        card.classList.add('guider-card');
        card.innerHTML = `
            <img src="https://www.thesportsdb.com/images/media/player/fanart/wyyyvv1421251691.jpg" alt="${guider.name}">
            <h3>${guider.name}</h3>
            <p><strong>Phone:</strong> ${guider.phone}</p>
            <p><strong>Email:</strong> ${guider.email}</p>
            <p><strong>City:</strong> ${guider.city}</p>
            <p><strong>salary:</strong> ${guider.country}</p>
            <p><strong>Country:</strong> ${guider.country}</p>
            <p><strong>salary:</strong> ${guider.salary}</p>
            <p><strong>sport:</strong> ${guider.sport}</p>
            <p><strong><i class="fa-brands fa-facebook"></i> :</strong> ${guider.social}</p>
        `;
        guidersList.appendChild(card);
    });
}
function searchPlayer() {
    const query = document.getElementById('player-search').value.toLowerCase();
    const filteredPlayers = players.filter(player => player.name.toLowerCase().startsWith(query));
    
    if (filteredPlayers.length > 0) {
        document.getElementById('no-player-message').style.display = 'none';
        displayPlayers(filteredPlayers);
    } else {
        document.getElementById('no-player-message').style.display = 'block';
        document.getElementById('players-list').innerHTML = '';
    }
}


function addToGroup(playerName) {
    if (!group.includes(playerName)) {
        if (group.length >= 11) {
            alert("You cannot add more than 11 players to the group.");
            return;
        }

        group.push(playerName);

        const player = players.find(p => p.name === playerName);

        totalMembers++;
        if (player.gender === 'female') totalFemale++;
        else totalMale++;

        document.getElementById('total-members').innerText = totalMembers;
        document.getElementById('total-female').innerText = totalFemale;
        document.getElementById('total-male').innerText = totalMale;

        updateCart();

        const buttons = document.querySelectorAll(`button[onclick="addToGroup('${playerName}')"]`);
        buttons.forEach(button => {
            button.innerText = "Already Added";
            button.style.backgroundColor = "red";
            button.style.color = "white";
            button.classList.add('added');
        });
    }
}
function updateCart() {
    const cartPlayers = document.getElementById('cart-players');
    cartPlayers.innerHTML = '';

    group.forEach(playerName => {
        const playerDiv = document.createElement('div');
        playerDiv.innerText = playerName;
        cartPlayers.appendChild(playerDiv);
    });

    const playerCountDiv = document.createElement('div');
    playerCountDiv.innerText = `Total Players in Cart: ${group.length}`;
    cartPlayers.appendChild(playerCountDiv);
}

function showDetails(playerName) {
    const player = players.find(p => p.name === playerName);
    document.getElementById('player-name').innerText = player.name;
    document.getElementById('player-details').innerHTML = `
        <img src="${player.imageUrl}" alt="${player.name}">
        <p><strong>Phone:</strong> ${player.phone}</p>
        <p><strong>Description:</strong> ${player.discription}</p>
            
        <p><strong>Email:</strong> ${player.email}</p>
        <p><strong>Country:</strong> ${player.country}</p>
        <p><strong>salary:</strong> ${player.salary}</p>
        <p><strong>sport:</strong> ${player.sport}</p>
        <p><strong><i class="fa-brands fa-facebook"></i> :</strong> ${player.social}</p>
        <p><strong>City:</strong> ${player.city}</p>
        <p><strong>Gender:</strong> ${player.gender}</p>
    `;
    document.getElementById('player-modal').style.display = 'block';
}

const modal = document.getElementById('player-modal');
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('search-btn').addEventListener('click', searchPlayer);

displayPlayers();
displayGuiders();

