// Base de données des exercices par groupe musculaire
const exercisesDatabase = {
    pectoraux: [
        {
            name: "Développé couché",
            description: "Exercice de base pour les pectoraux",
            sets: "3-4 séries",
            reps: "8-12 répétitions",
            rest: "2-3 minutes",
            tips: "Gardez les omoplates serrées, descendez la barre jusqu'à la poitrine",
            videoId: "rT7DgCr-3pg"
        },
        {
            name: "Développé incliné",
            description: "Cible le haut des pectoraux",
            sets: "3-4 séries",
            reps: "8-12 répétitions",
            rest: "2-3 minutes",
            tips: "Inclinaison de 30-45°, contrôlez la descente",
            videoId: "IP0ULDX1ILs"
        },
        {
            name: "Écarté couché",
            description: "Isolation des pectoraux",
            sets: "3 séries",
            reps: "10-15 répétitions",
            rest: "1-2 minutes",
            tips: "Mouvement en arc de cercle, ne descendez pas trop bas",
            videoId: "eozdVDA78K0"
        },
        {
            name: "Pompes",
            description: "Exercice au poids du corps",
            sets: "3-4 séries",
            reps: "10-20 répétitions",
            rest: "1-2 minutes",
            tips: "Corps aligné, descente contrôlée jusqu'à la poitrine",
            videoId: "IODxDxX7oi4"
        },
        {
            name: "Dips",
            description: "Exercice polyarticulaire",
            sets: "3 séries",
            reps: "8-15 répétitions",
            rest: "2 minutes",
            tips: "Penchez-vous légèrement vers l'avant, contrôlez la descente",
            videoId: "2z8JmcrW-As"
        }
    ],
    dos: [
        {
            name: "Tractions",
            description: "Exercice roi pour le dos",
            sets: "3-4 séries",
            reps: "5-12 répétitions",
            rest: "2-3 minutes",
            tips: "Prise large, tirez avec les coudes, serrez les omoplates",
            videoId: "eGo4IYlbE5g"
        },
        {
            name: "Rowing barre",
            description: "Développe l'épaisseur du dos",
            sets: "3-4 séries",
            reps: "8-12 répétitions",
            rest: "2-3 minutes",
            tips: "Dos droit, tirez vers le bas du sternum",
            videoId: "FWJR5Ve8bnQ"
        },
        {
            name: "Tirage horizontal",
            description: "Exercice d'isolation pour le dos",
            sets: "3-4 séries",
            reps: "10-15 répétitions",
            rest: "1-2 minutes",
            tips: "Serrez les omoplates, contrôlez le retour",
            videoId: "xQNrFHEMhI4"
        },
        {
            name: "Soulevé de terre",
            description: "Exercice polyarticulaire complet",
            sets: "3-4 séries",
            reps: "5-8 répétitions",
            rest: "3-4 minutes",
            tips: "Dos droit, poussez avec les talons, hanches vers l'avant",
            videoId: "ytGaGIn3SjE"
        },
        {
            name: "Rowing haltère",
            description: "Travail unilatéral du dos",
            sets: "3 séries",
            reps: "10-12 répétitions",
            rest: "1-2 minutes",
            tips: "Appui sur banc, tirez vers la hanche",
            videoId: "roCP6wCXPqo"
        }
    ],
    jambes: [
        {
            name: "Squat",
            description: "Exercice roi pour les jambes",
            sets: "3-4 séries",
            reps: "8-15 répétitions",
            rest: "2-3 minutes",
            tips: "Descendez jusqu'aux cuisses parallèles, poussez avec les talons",
            videoId: "ultWZbUMPL8"
        },
        {
            name: "Fentes",
            description: "Exercice unilatéral pour les jambes",
            sets: "3 séries",
            reps: "10-15 répétitions par jambe",
            rest: "1-2 minutes",
            tips: "Genou arrière proche du sol, poussée avec le talon avant",
            videoId: "QOVaHwm-Q6U"
        },
        {
            name: "Leg Press",
            description: "Alternative sécurisée au squat",
            sets: "3-4 séries",
            reps: "12-20 répétitions",
            rest: "2 minutes",
            tips: "Pieds écartés largeur d'épaules, descente contrôlée",
            videoId: "IZxyjW7MPJQ"
        },
        {
            name: "Leg Curl",
            description: "Isolation des ischio-jambiers",
            sets: "3 séries",
            reps: "12-15 répétitions",
            rest: "1-2 minutes",
            tips: "Contraction maximale en haut, descente lente",
            videoId: "ELOCsoDSmrg"
        },
        {
            name: "Mollets debout",
            description: "Développement des mollets",
            sets: "4 séries",
            reps: "15-20 répétitions",
            rest: "1 minute",
            tips: "Amplitude complète, contraction en haut",
            videoId: "gwLzBJYoWlI"
        }
    ],
    bras: [
        {
            name: "Curl biceps barre",
            description: "Exercice de base pour les biceps",
            sets: "3-4 séries",
            reps: "8-12 répétitions",
            rest: "1-2 minutes",
            tips: "Coudes fixes, mouvement contrôlé, serrez en haut",
            videoId: "ykJmrZ5v0Oo"
        },
        {
            name: "Développé couché prise serrée",
            description: "Exercice de base pour les triceps",
            sets: "3-4 séries",
            reps: "8-12 répétitions",
            rest: "2 minutes",
            tips: "Mains rapprochées, coudes près du corps",
            videoId: "nEF0bv2FW94"
        },
        {
            name: "Curl marteau",
            description: "Travaille biceps et avant-bras",
            sets: "3 séries",
            reps: "10-15 répétitions",
            rest: "1-2 minutes",
            tips: "Prise neutre, mouvement alterné ou simultané",
            videoId: "zC3nLlEvin4"
        },
        {
            name: "Extension triceps couché",
            description: "Isolation des triceps",
            sets: "3 séries",
            reps: "10-15 répétitions",
            rest: "1-2 minutes",
            tips: "Coudes fixes, descente contrôlée vers le front",
            videoId: "d_KZxkY_0cM"
        },
        {
            name: "Curl concentration",
            description: "Isolation maximale des biceps",
            sets: "3 séries",
            reps: "10-12 répétitions par bras",
            rest: "1 minute",
            tips: "Coude appuyé sur la cuisse, contraction maximale",
            videoId: "Jvj2wV0vOp0"
        }
    ],
    epaules: [
        {
            name: "Développé militaire",
            description: "Exercice de base pour les épaules",
            sets: "3-4 séries",
            reps: "8-12 répétitions",
            rest: "2-3 minutes",
            tips: "Debout, barre devant, poussée verticale",
            videoId: "2yjwXTZQDDI"
        },
        {
            name: "Élévations latérales",
            description: "Isolation des deltoïdes moyens",
            sets: "3-4 séries",
            reps: "12-15 répétitions",
            rest: "1-2 minutes",
            tips: "Bras légèrement fléchis, montée jusqu'à l'horizontale",
            videoId: "3VcKaXpzqRo"
        },
        {
            name: "Élévations frontales",
            description: "Cible les deltoïdes antérieurs",
            sets: "3 séries",
            reps: "12-15 répétitions",
            rest: "1-2 minutes",
            tips: "Alternez les bras, montée jusqu'à l'horizontale",
            videoId: "qEwKCR5JCog"
        },
        {
            name: "Oiseau",
            description: "Travaille les deltoïdes postérieurs",
            sets: "3-4 séries",
            reps: "12-15 répétitions",
            rest: "1-2 minutes",
            tips: "Penché en avant, serrez les omoplates",
            videoId: "T1U3_Tpwddc"
        },
        {
            name: "Shrugs",
            description: "Développement des trapèzes",
            sets: "3 séries",
            reps: "12-15 répétitions",
            rest: "1-2 minutes",
            tips: "Haussement d'épaules vertical, contraction en haut",
            videoId: "cJRVVxmytaM"
        }
    ],
    abdos: [
        {
            name: "Crunch",
            description: "Exercice de base pour les abdos",
            sets: "3-4 séries",
            reps: "15-25 répétitions",
            rest: "1 minute",
            tips: "Mains derrière la tête, montée contrôlée",
            videoId: "Xyd_fa5zoEU"
        },
        {
            name: "Planche",
            description: "Gainage statique du core",
            sets: "3-4 séries",
            reps: "30-60 secondes",
            rest: "1 minute",
            tips: "Corps aligné, contractez les abdos et fessiers",
            videoId: "ASdvN_XEl_c"
        },
        {
            name: "Relevé de jambes",
            description: "Cible le bas des abdominaux",
            sets: "3 séries",
            reps: "12-20 répétitions",
            rest: "1 minute",
            tips: "Jambes tendues, montée contrôlée",
            videoId: "JB2oyawG9KI"
        },
        {
            name: "Russian Twist",
            description: "Travaille les obliques",
            sets: "3 séries",
            reps: "20-30 répétitions",
            rest: "1 minute",
            tips: "Pieds décollés, rotation du tronc",
            videoId: "wkD8rjkodUI"
        },
        {
            name: "Mountain Climbers",
            description: "Cardio et renforcement du core",
            sets: "3 séries",
            reps: "20-30 répétitions",
            rest: "1 minute",
            tips: "Position planche, alternez les genoux vers la poitrine",
            videoId: "nmwgirgXLYM"
        }
    ]
};

// Variables globales pour le minuteur
let timerInterval;
let timeLeft = 0;
let isTimerRunning = false;
let selectedTime = 0;

// Variables globales pour l'authentification et le planning
let currentUser = null;
let isAuthMode = 'login'; // 'login' ou 'register'
let selectedExercisesForProgram = [];
let userPrograms = [];
let weeklyPlanning = {
    lundi: null,
    mardi: null,
    mercredi: null,
    jeudi: null,
    vendredi: null,
    samedi: null,
    dimanche: null
};

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupMuscleGroups();
    setupTimer();
    setupCalculators();
    setupAuth();
    loadUserData();
    updateAuthUI();
}

// Navigation
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Menu hamburger pour mobile
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Navigation fluide
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            if (href === '#' && link.id === 'auth-link') {
                // Lien de connexion/déconnexion
                if (currentUser) {
                    logout();
                } else {
                    showAuthModal();
                }
            } else {
                const targetId = href.substring(1);
                scrollToSection(targetId);
            }
            navMenu.classList.remove('active');
        });
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Gestion des groupes musculaires
function setupMuscleGroups() {
    const muscleGroups = document.querySelectorAll('.muscle-group');
    
    muscleGroups.forEach(group => {
        group.addEventListener('click', () => {
            const muscleType = group.dataset.group;
            showExercises(muscleType);
        });
    });
}

function showExercises(muscleType) {
    const exerciseList = document.getElementById('exercise-list');
    const selectedMuscle = document.getElementById('selected-muscle');
    const exercisesContainer = document.getElementById('exercises-container');
    
    // Mettre à jour le titre
    selectedMuscle.textContent = `Exercices - ${muscleType.charAt(0).toUpperCase() + muscleType.slice(1)}`;
    
    // Vider le conteneur
    exercisesContainer.innerHTML = '';
    
    // Ajouter les exercices
    const exercises = exercisesDatabase[muscleType] || [];
    exercises.forEach(exercise => {
        const exerciseElement = createExerciseElement(exercise);
        exercisesContainer.appendChild(exerciseElement);
    });
    
    // Afficher la liste
    exerciseList.classList.remove('hidden');
    exerciseList.scrollIntoView({ behavior: 'smooth' });
}

function createExerciseElement(exercise) {
    const div = document.createElement('div');
    div.className = 'exercise-item';
    div.innerHTML = `
        <h4>${exercise.name}</h4>
        <p><strong>Description:</strong> ${exercise.description}</p>
        <p><strong>Séries:</strong> ${exercise.sets}</p>
        <p><strong>Répétitions:</strong> ${exercise.reps}</p>
        <p><strong>Repos:</strong> ${exercise.rest}</p>
        <p><strong>Conseils:</strong> ${exercise.tips}</p>
        ${exercise.videoId ? `
        <div class="video-container">
            <h5><i class="fas fa-play-circle"></i> Vidéo explicative :</h5>
            <div class="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/${exercise.videoId}" 
                    frameborder="0" 
                    allowfullscreen
                    title="Vidéo explicative - ${exercise.name}">
                </iframe>
            </div>
        </div>
        ` : ''}
    `;
    return div;
}

function closeExerciseList() {
    const exerciseList = document.getElementById('exercise-list');
    exerciseList.classList.add('hidden');
}

// Gestion du minuteur
function setupTimer() {
    const presetButtons = document.querySelectorAll('.preset-btn');
    const customMinutes = document.getElementById('custom-minutes');
    const customSeconds = document.getElementById('custom-seconds');
    const setCustomButton = document.getElementById('set-custom-time');
    const startButton = document.getElementById('start-timer');
    const pauseButton = document.getElementById('pause-timer');
    const resetButton = document.getElementById('reset-timer');

    // Boutons de temps prédéfinis
    presetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const time = parseInt(btn.dataset.time);
            setTimer(time);
            
            // Mettre à jour l'apparence des boutons
            presetButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Temps personnalisé
    setCustomButton.addEventListener('click', () => {
        const minutes = parseInt(customMinutes.value) || 0;
        const seconds = parseInt(customSeconds.value) || 0;
        const totalSeconds = minutes * 60 + seconds;
        
        if (totalSeconds > 0) {
            setTimer(totalSeconds);
            presetButtons.forEach(b => b.classList.remove('active'));
        }
    });

    // Contrôles du minuteur
    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);
}

function setTimer(seconds) {
    selectedTime = seconds;
    timeLeft = seconds;
    updateTimerDisplay();
    resetTimer();
}

function startTimer() {
    if (timeLeft <= 0) return;
    
    isTimerRunning = true;
    document.body.classList.add('timer-active');
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            timerFinished();
        }
    }, 1000);
}

function pauseTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    document.body.classList.remove('timer-active');
}

function resetTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    timeLeft = selectedTime;
    updateTimerDisplay();
    document.body.classList.remove('timer-active', 'timer-finished');
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timer-display').textContent = display;
}

function timerFinished() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    document.body.classList.remove('timer-active');
    document.body.classList.add('timer-finished');
    
    // Alerte sonore (si supportée par le navigateur)
    playNotificationSound();
    
    // Notification
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Temps de repos terminé !', {
            body: 'Il est temps de reprendre l\'entraînement',
            icon: '/favicon.ico'
        });
    }
    
    // Alerte visuelle
    alert('⏰ Temps de repos terminé ! Il est temps de reprendre l\'entraînement !');
}

function playNotificationSound() {
    // Créer un son de notification simple
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// Calculateurs
function setupCalculators() {
    // Demander la permission pour les notifications
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

function calculate1RM() {
    const weight = parseFloat(document.getElementById('weight').value);
    const reps = parseInt(document.getElementById('reps').value);
    const resultDiv = document.getElementById('rm-result');
    
    if (!weight || !reps || weight <= 0 || reps <= 0) {
        resultDiv.innerHTML = '<p style="color: #ee5a24;">Veuillez entrer des valeurs valides</p>';
        return;
    }
    
    // Formule de Brzycki pour calculer le 1RM
    const oneRM = weight / (1.0278 - (0.0278 * reps));
    
    // Calculer différents pourcentages
    const percentages = [95, 90, 85, 80, 75, 70, 65, 60];
    let resultHTML = `<h4>1RM estimé: ${oneRM.toFixed(1)} kg</h4><br>`;
    resultHTML += '<strong>Charges recommandées:</strong><br>';
    
    percentages.forEach(percent => {
        const weight = (oneRM * percent / 100).toFixed(1);
        resultHTML += `${percent}%: ${weight} kg<br>`;
    });
    
    resultDiv.innerHTML = resultHTML;
}

function calculateProgression() {
    const currentWeight = parseFloat(document.getElementById('current-weight').value);
    const resultDiv = document.getElementById('progression-result');
    
    if (!currentWeight || currentWeight <= 0) {
        resultDiv.innerHTML = '<p style="color: #ee5a24;">Veuillez entrer un poids valide</p>';
        return;
    }
    
    let resultHTML = '<h4>Progression recommandée:</h4><br>';
    resultHTML += '<strong>Augmentation progressive:</strong><br>';
    
    // Progression sur 8 semaines
    for (let week = 1; week <= 8; week++) {
        const increase = week <= 4 ? 2.5 : 1.25; // 2.5kg les 4 premières semaines, puis 1.25kg
        const newWeight = currentWeight + (increase * week);
        resultHTML += `Semaine ${week}: ${newWeight.toFixed(1)} kg<br>`;
    }
    
    resultHTML += '<br><strong>Conseils:</strong><br>';
    resultHTML += '• Augmentez progressivement la charge<br>';
    resultHTML += '• Maintenez une technique parfaite<br>';
    resultHTML += '• Écoutez votre corps<br>';
    resultHTML += '• Prenez du repos si nécessaire';
    
    resultDiv.innerHTML = resultHTML;
}

// Système d'authentification
function setupAuth() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Simulation de connexion (en réalité, vous feriez un appel API)
    const users = JSON.parse(localStorage.getItem('fittracker_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('fittracker_current_user', JSON.stringify(user));
        closeAuthModal();
        updateAuthUI();
        loadUserPlanning();
        showSuccessMessage('Connexion réussie !');
    } else {
        showErrorMessage('Email ou mot de passe incorrect');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;

    if (password !== confirm) {
        showErrorMessage('Les mots de passe ne correspondent pas');
        return;
    }

    // Vérifier si l'utilisateur existe déjà
    const users = JSON.parse(localStorage.getItem('fittracker_users') || '[]');
    if (users.find(u => u.email === email)) {
        showErrorMessage('Un compte avec cet email existe déjà');
        return;
    }

    // Créer le nouvel utilisateur
    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        programs: [],
        planning: {
            lundi: null,
            mardi: null,
            mercredi: null,
            jeudi: null,
            vendredi: null,
            samedi: null,
            dimanche: null
        },
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('fittracker_users', JSON.stringify(users));

    currentUser = newUser;
    localStorage.setItem('fittracker_current_user', JSON.stringify(newUser));

    closeAuthModal();
    updateAuthUI();
    showSuccessMessage('Compte créé avec succès !');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('fittracker_current_user');
    updateAuthUI();
    showSuccessMessage('Déconnexion réussie');
}

function loadUserData() {
    const savedUser = localStorage.getItem('fittracker_current_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        loadUserPlanning();
    }
}

function updateAuthUI() {
    const authLink = document.getElementById('auth-link');
    const planningContent = document.getElementById('planning-content');
    const userPlanning = document.getElementById('user-planning');
    const usernameDisplay = document.getElementById('username-display');

    if (currentUser) {
        authLink.textContent = 'Déconnexion';
        planningContent.classList.add('hidden');
        userPlanning.classList.remove('hidden');
        usernameDisplay.textContent = currentUser.name;
        displayUserPrograms();
        displayWeeklyPlanning();
    } else {
        authLink.textContent = 'Connexion';
        planningContent.classList.remove('hidden');
        userPlanning.classList.add('hidden');
    }
}

// Gestion des modals
function showAuthModal() {
    document.getElementById('auth-modal').classList.remove('hidden');
}

function closeAuthModal() {
    document.getElementById('auth-modal').classList.add('hidden');
    resetAuthForms();
}

function toggleAuthMode() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const modalTitle = document.getElementById('modal-title');
    const authSwitchText = document.getElementById('auth-switch-text');
    const authSwitchBtn = document.getElementById('auth-switch-btn');

    if (isAuthMode === 'login') {
        isAuthMode = 'register';
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        modalTitle.textContent = 'Inscription';
        authSwitchText.textContent = 'Déjà un compte ?';
        authSwitchBtn.textContent = 'Se connecter';
    } else {
        isAuthMode = 'login';
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        modalTitle.textContent = 'Connexion';
        authSwitchText.textContent = 'Pas encore de compte ?';
        authSwitchBtn.textContent = 'S\'inscrire';
    }
}

function resetAuthForms() {
    document.getElementById('login-form').reset();
    document.getElementById('register-form').reset();
}

// Gestion des programmes d'entraînement
function createWorkout() {
    if (!currentUser) {
        showAuthModal();
        return;
    }
    document.getElementById('workout-modal').classList.remove('hidden');
}

function closeWorkoutModal() {
    document.getElementById('workout-modal').classList.add('hidden');
    document.getElementById('workout-form').reset();
    selectedExercisesForProgram = [];
    updateSelectedExercisesDisplay();
}

function showExerciseSelector() {
    document.getElementById('exercise-selector-modal').classList.remove('hidden');
    setupExerciseSelector();
}

function closeExerciseSelectorModal() {
    document.getElementById('exercise-selector-modal').classList.add('hidden');
}

function setupExerciseSelector() {
    const muscleButtons = document.querySelectorAll('.muscle-btn');
    const exerciseOptions = document.getElementById('exercise-options');

    muscleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            muscleButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const muscle = btn.dataset.muscle;
            displayExerciseOptions(muscle);
        });
    });
}

function displayExerciseOptions(muscle) {
    const exerciseOptions = document.getElementById('exercise-options');
    const exercises = exercisesDatabase[muscle] || [];

    exerciseOptions.innerHTML = '';
    exercises.forEach(exercise => {
        const option = document.createElement('div');
        option.className = 'exercise-option';
        option.innerHTML = `
            <input type="checkbox" id="ex-${exercise.name}" value="${exercise.name}" data-muscle="${muscle}">
            <label for="ex-${exercise.name}">${exercise.name}</label>
