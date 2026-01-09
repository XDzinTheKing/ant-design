<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Para Maria Lídia</title>
    <style>
        /* Importando uma fonte fofa do Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Quicksand:wght@300;500&display=swap');

        :root {
            --cor-fundo: #fff5f7;
            --cor-principal: #ff8fa3;
            --cor-secundaria: #ffb3c1;
            --texto: #5e5454;
        }

        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: var(--cor-fundo);
            font-family: 'Quicksand', sans-serif;
            overflow: hidden;
            color: var(--texto);
        }

        /* Container Principal */
        .card {
            background: white;
            padding: 40px;
            border-radius: 30px;
            box-shadow: 0 10px 30px rgba(255, 143, 163, 0.2);
            text-align: center;
            z-index: 10;
            max-width: 400px;
            border: 2px solid var(--cor-secundaria);
            animation: surgir 1.5s ease-out;
        }

        h1 {
            font-family: 'Dancing Script', cursive;
            font-size: 3rem;
            color: var(--cor-principal);
            margin-bottom: 10px;
        }

        p {
            font-size: 1.1rem;
            line-height: 1.6;
        }

        /* Animação do Coração Central */
        .heart-main {
            font-size: 50px;
            color: var(--cor-principal);
            animation: pulsar 1.5s infinite;
            display: inline-block;
            margin: 20px 0;
        }

        /* Partículas de Coração ao Fundo */
        .hearts-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        .heart-particle {
            position: absolute;
            color: var(--cor-secundaria);
            opacity: 0.6;
            animation: flutuar linear infinite;
        }

        /* Keyframes das Animações */
        @keyframes pulsar {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }

        @keyframes surgir {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes flutuar {
            from { transform: translateY(100vh) rotate(0deg); opacity: 1; }
            to { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
        }

        /* Estilo do Botão */
        .btn-carinho {
            background-color: var(--cor-principal);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 25px;
            font-size: 1rem;
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
            display: inline-block;
            margin-top: 20px;
            font-weight: 500;
        }

        .btn-carinho:hover {
            background-color: #ff4d6d;
            transform: scale(1.05);
        }
    </style>
</head>
<body>

    <div class="hearts-bg" id="hearts-container"></div>

    <div class="card">
        <h1>Maria Lídia</h1>
        <div class="heart-main">❤</div>
        <p>Você é uma pessoa especial que ilumina tudo ao seu redor. Este cantinho foi feito apenas para te lembrar do quanto você é querida!</p>
        <a href="#" class="btn-carinho" onclick="mudarFrase()">Clique para um sorriso</a>
    </div>

    <script>
        // Gerador de corações flutuantes
        function criarCoracao() {
            const container = document.getElementById('hearts-container');
            const coracao = document.createElement('div');
            coracao.classList.add('heart-particle');
            coracao.innerHTML = '❤';
            
            coracao.style.left = Math.random() * 100 + 'vw';
            coracao.style.animationDuration = Math.random() * 3 + 2 + 's';
            coracao.style.fontSize = Math.random() * 20 + 10 + 'px';
            
            container.appendChild(coracao);

            setTimeout(() => {
                coracao.remove();
            }, 5000);
        }

        setInterval(criarCoracao, 300);

        // Função para mudar a frase
        const frases = [
            "Seu brilho é único! ✨",
            "O mundo é mais bonito com você.",
            "Nunca esqueça o quanto você é incrível!",
            "Maria Lídia: um nome doce para uma pessoa especial.",
            "Que seu dia seja tão radiante quanto seu sorriso! 🌸"
        ];

        function mudarFrase() {
            const p = document.querySelector('p');
            const randomFrase = frases[Math.floor(Math.random() * frases.length)];
            p.style.opacity = 0;
            setTimeout(() => {
                p.innerText = randomFrase;
                p.style.opacity = 1;
                p.style.transition = '0.5s';
            }, 300);
        }
    </script>
</body>
</html>