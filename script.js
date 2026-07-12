// DATA DE INÍCIO DO NAMORO - ALTERE AQUI!
const startDate = new Date('2060-07-04'); // Formato: YYYY-MM-DD

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    updateRelationshipInfo();
    createFloatingHearts();
    updateDaysCounter();
    
    // Atualizar contagem de dias a cada hora
    setInterval(updateDaysCounter, 3600000);
});

// Atualizar informações do relacionamento
function updateRelationshipInfo() {
    const options = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit'
    };
    const formattedDate = startDate.toLocaleDateString('pt-BR', options);
    document.getElementById('relationshipDate').textContent = formattedDate;
}

// Contar dias desde o início
function updateDaysCounter() {
    const today = new Date();
    const timeDiff = today - startDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    
    const years = Math.floor(daysDiff / 365);
    const months = Math.floor((daysDiff % 365) / 30);
    const days = daysDiff % 30;
    
    let counterText = '';
    if (years > 0) {
        counterText += `${years} ano${years > 1 ? 's' : ''} `;
    }
    if (months > 0) {
        counterText += `${months} mês${months > 1 ? 'es' : ''} `;
    }
    counterText += `${days} dia${days !== 1 ? 's' : ''}`;
    
    document.getElementById('daysCounter').textContent = `${daysDiff} dias (${counterText})`;
}

// Criar corações flutuantes
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    const hearts = ['❤️', '💕', '💖', '💗', '💝'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
    
    // Criar corações continuamente
    setInterval(createHeart, 500);
}

// Controle de música
let isPlaying = false;

function toggleMusic() {
    const audio = document.getElementById('backgroundMusic');
    const button = document.querySelector('.music-toggle');
    
    if (isPlaying) {
        audio.pause();
        button.textContent = '🎵 Ativar Música';
        button.classList.remove('active');
        isPlaying = false;
    } else {
        audio.play().catch(error => {
            console.log('Erro ao reproduzir áudio:', error);
            alert('Adicione um arquivo de música chamado "musica.mp3" na pasta do projeto');
        });
        button.textContent = '⏸️ Pausar Música';
        button.classList.add('active');
        isPlaying = true;
    }
}

// Permitir play automático (alguns navegadores bloqueiam)
window.addEventListener('click', function() {
    if (!isPlaying) {
        const audio = document.getElementById('backgroundMusic');
        audio.play().catch(error => {
            console.log('Autoplay bloqueado pelo navegador');
        });
    }
}, { once: true });