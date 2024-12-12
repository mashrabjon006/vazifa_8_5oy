    // Maslahat Generatori
    const adviceButton = document.getElementById('adviceButton');
    const adviceDisplay = document.getElementById('adviceDisplay');

    adviceButton.addEventListener('click', function() {
        fetch('https://api.adviceslip.com/advice') 
            .then(response => response.json()) 
            .then(data => {
                adviceDisplay.innerHTML = data.slip.advice; 
            });
    });

    // Tasodifiy Fakt
    const factButton = document.getElementById('factButton');
    const factDisplay = document.getElementById('factDisplay');

    factButton.addEventListener('click', function() {
        fetch('https://catfact.ninja/fact') 
            .then(response => response.json())
            .then(data => {
                factDisplay.innerHTML = data.fact; 
            });
    });

    // Tasodifiy Rang Generator


    // Kunning Tasodifiy Hazili
    const jokeButton = document.getElementById('jokeButton');
    const jokeDisplay = document.getElementById('jokeDisplay');

    jokeButton.addEventListener('click', function() {
        fetch('https://v2.jokeapi.dev/joke/Any') 
            .then(response => response.json())
            .then(data => {
                if (data.type === 'single') {
                    jokeDisplay.innerHTML = data.joke; 
                } else {
                    jokeDisplay.innerHTML = `${data.setup} - ${data.delivery}`; 
                }
            });
    });

    // Mashhur Kishilar Haqida Ma'lumot
    const characterButton = document.getElementById('characterButton');
    const characterInput = document.getElementById('characterInput');
    const characterDisplay = document.getElementById('characterDisplay');

    characterButton.addEventListener('click', function() {
        const name = characterInput.value; 
        fetch(`https://rickandmortyapi.com/api/character/?name=${name}`) 
            .then(response => response.json())
            .then(data => {
                if (data.results) {
                    const character = data.results[0];
                    characterDisplay.innerHTML = `
                        <img src="${character.image}" alt="${character.name}" style="width: 100px;">
                        <p>Ism: ${character.name}</p>
                        <p>Status: ${character.status}</p>
                    `;
                } else {
                    characterDisplay.innerHTML = 'topilmadi'; 
                }
            });
    });

    // Foydalanuvchini Ro'yxatdan O'tkazish
    const registerButton = document.getElementById('registerButton');
    const usernameInput = document.getElementById('usernameInput');
    const registerMessage = document.getElementById('registerMessage');

    registerButton.addEventListener('click', function() {
        const username = usernameInput.value; 
        fetch('https://reqres.in/api/users', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: username }) 
        })
        .then(response => response.json())
        .then(data => {
            registerMessage.innerHTML = 'Foydalanuvchi muvaffaqiyatli ro\'yxatga olindi.';
        });
    });

  
