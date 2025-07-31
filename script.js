const levelData = {
    ferro: { level: "Ferro", icon: "🛡️", class: "level-ferro" },
    bronze: { level: "Bronze", icon: "🥉", class: "level-bronze" },
    prata: { level: "Prata", icon: "🥈", class: "level-prata" },
    ouro: { level: "Ouro", icon: "🥇", class: "level-ouro" },
    platina: { level: "Platina", icon: "⭐", class: "level-platina" },
    ascendente: { level: "Ascendente", icon: "🚀", class: "level-ascendente" },
    imortal: { level: "Imortal", icon: "🔥", class: "level-imortal" },
    radiante: { level: "Radiante", icon: "☀️", class: "level-radiante" }
};

const heroNameInput = document.getElementById('heroName');
const heroXPInput = document.getElementById('heroXP');
const classifyBtn = document.getElementById('classifyBtn');
const clearBtn = document.getElementById('clearBtn');
const resultSection = document.getElementById('resultSection');
const levelBadge = document.getElementById('levelBadge');
const resultMessage = document.getElementById('resultMessage');
const nameError = document.getElementById('nameError');
const xpError = document.getElementById('xpError');

function getHeroLevel(xp) {
    if (xp < 1000) return levelData.ferro;
    if (xp >= 1001 && xp <= 2000) return levelData.bronze;
    if (xp >= 2001 && xp <= 5000) return levelData.prata;
    if (xp >= 5001 && xp <= 7000) return levelData.ouro;
    if (xp >= 7001 && xp <= 8000) return levelData.platina;
    if (xp >= 8001 && xp <= 9000) return levelData.ascendente;
    if (xp >= 9001 && xp <= 10000) return levelData.imortal;
    return levelData.radiante;
}

function validateForm() {
    let isValid = true;
    
    
    nameError.classList.add('hidden');
    xpError.classList.add('hidden');
    
    
    const heroName = heroNameInput.value.trim();
    if (!heroName) {
        nameError.textContent = "Por favor, digite o nome do herói!";
        nameError.classList.remove('hidden');
        isValid = false;
    }
    
   
    const xpValue = parseInt(heroXPInput.value);
    if (!heroXPInput.value || isNaN(xpValue) || xpValue < 0) {
        xpError.textContent = "Por favor, digite uma quantidade válida de XP!";
        xpError.classList.remove('hidden');
        isValid = false;
    }
    
    return isValid;
}


function classifyHero() {
    if (!validateForm()) {
        return;
    }
    
    const heroName = heroNameInput.value.trim();
    const xp = parseInt(heroXPInput.value);
    const level = getHeroLevel(xp);
    
    
    levelBadge.innerHTML = `${level.icon} ${level.level}`;
    levelBadge.className = `level-badge ${level.class}`;
    
    resultMessage.textContent = `O Herói de nome ${heroName} está no nível de ${level.level}`;
    
    
    resultSection.classList.remove('hidden');
}


function clearForm() {
    heroNameInput.value = '';
    heroXPInput.value = '';
    resultSection.classList.add('hidden');
    nameError.classList.add('hidden');
    xpError.classList.add('hidden');
}


classifyBtn.addEventListener('click', classifyHero);
clearBtn.addEventListener('click', clearForm);


heroNameInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        classifyHero();
    }
});

heroXPInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        classifyHero();
    }
});


heroXPInput.addEventListener('input', function(e) {
    
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, '');
    e.target.value = value;
});


heroNameInput.addEventListener('input', function() {
    if (heroNameInput.value.trim()) {
        nameError.classList.add('hidden');
    }
});

heroXPInput.addEventListener('input', function() {
    if (heroXPInput.value && !isNaN(parseInt(heroXPInput.value))) {
        xpError.classList.add('hidden');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    
    heroNameInput.focus();
    
   
    resultSection.classList.add('hidden');
});
