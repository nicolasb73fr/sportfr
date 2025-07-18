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
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/rT7DgCr-3pg",
            isPremium: false
        },
        {
            name: "Développé incliné",
            description: "Cible le haut des pectoraux",
            sets: "3-4 séries",
            reps: "8-12 répétitions",
            rest: "2-3 minutes",
            tips: "Inclinaison de 30-45°, contrôlez la descente",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/IP0q6ex7NZE",
            isPremium: true
        },
        {
            name: "Écarté couché",
            description: "Isolation des pectoraux",
            sets: "3 séries",
            reps: "10-15 répétitions",
            rest: "1-2 minutes",
            tips: "Mouvement en arc de cercle, ne descendez pas trop bas",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/eozdVDA78K0",
            isPremium: true
        },
        {
            name: "Pompes",
            description: "Exercice au poids du corps",
            sets: "3-4 séries",
            reps: "10-20 répétitions",
            rest: "1-2 minutes",
            tips: "Corps aligné, descente contrôlée jusqu'à la poitrine",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/IODxDxX7oi4",
            isPremium: false
        },
        {
            name: "Dips",
            description: "Exercice polyarticulaire",
            sets: "3 séries",
            reps: "8-15 répétitions",
            rest: "2 minutes",
            tips: "Penchez-vous légèrement vers l'avant, contrôlez la descente",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/2z8JmcrW-As",
            isPremium: true
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
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/eGo4IYlbE5g",
            isPremium: false
        },
        {
            name: "Rowing barre",
            description: "Développe l'épaisseur du dos",
            sets: "3-4 séries",
            reps: "8-12 répétitions",
            rest: "2-3 minutes",
            tips: "Dos droit, tirez vers le bas du sternum",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/FWJR5Ve8bnQ",
            isPremium: true
        },
        {
            name: "Tirage horizontal",
            description: "Exercice d'isolation pour le dos",
            sets: "3-4 séries",
            reps: "10-15 répétitions",
            rest: "1-2 minutes",
            tips: "Serrez les omoplates, contrôlez le retour",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/GZbfZ033f74",
            isPremium: true
        },
        {
            name: "Soulevé de terre",
            description: "Exercice polyarticulaire complet",
            sets: "3-4 séries",
            reps: "5-8 répétitions",
            rest: "3-4 minutes",
            tips: "Dos droit, poussez avec les talons, hanches vers l'avant",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/ytGaGIn3SjE",
            isPremium: true
        },
        {
            name: "Rowing haltère",
            description: "Travail unilatéral du dos",
            sets: "3 séries",
            reps: "10-12 répétitions",
            rest: "1-2 minutes",
            tips: "Appui sur banc, tirez vers la hanche",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/roCP6wCXPqo",
            isPremium: false
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
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/ultWZbUMPL8",
            isPremium: false
        },
        {
            name: "Fentes",
            description: "Exercice unilatéral pour les jambes",
            sets: "3 séries",
            reps: "10-15 répétitions par jambe",
            rest: "1-2 minutes",
            tips: "Genou arrière proche du sol, poussée avec le talon avant",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/QOVaHwm-Q6U",
            isPremium: true
        },
        {
            name: "Leg Press",
            description: "Alternative sécurisée au squat",
            sets: "3-4 séries",
            reps: "12-20 répétitions",
            rest: "2 minutes",
            tips: "Pieds écartés largeur d'épaules, descente contrôlée",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/IZxyjW7MPJQ",
            isPremium: true
        },
        {
            name: "Leg Curl",
            description: "Isolation des ischio-jambiers",
            sets: "3 séries",
            reps: "12-15 répétitions",
            rest: "1-2 minutes",
            tips: "Contraction maximale en haut, descente lente",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/ELOCsoDSmrg",
            isPremium: true
        },
        {
            name: "Mollets debout",
            description: "Développement des mollets",
            sets: "4 séries",
            reps: "15-20 répétitions",
            rest: "1 minute",
            tips: "Amplitude complète, contraction en haut",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/gwLzBJYoWlI",
            isPremium: false
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
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/ykJmrZ5v0Oo",
            isPremium: false
        },
        {
            name: "Développé couché prise serrée",
            description: "Exercice de base pour les triceps",
            sets: "3-4 séries",
            reps: "8-12 répétitions",
            rest: "2 minutes",
            tips: "Mains rapprochées, coudes près du corps",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/nEF0bv2FW94",
            isPremium: true
        },
        {
            name: "Curl marteau",
            description: "Travaille biceps et avant-bras",
            sets: "3 séries",
            reps: "10-15 répétitions",
            rest: "1-2 minutes",
            tips: "Prise neutre, mouvement alterné ou simultané",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/zC3nLlEvin4",
            isPremium: true
        },
        {
            name: "Extension triceps couché",
            description: "Isolation des triceps",
            sets: "3 séries",
            reps: "10-15 répétitions",
            rest: "1-2 minutes",
            tips: "Coudes fixes, descente contrôlée vers le front",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/d_KZxkY_0cM",
            isPremium: true
        },
        {
            name: "Curl concentration",
            description: "Isolation maximale des biceps",
            sets: "3 séries",
            reps: "10-12 répétitions par bras",
            rest: "1 minute",
            tips: "Coude appuyé sur la cuisse, contraction maximale",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/Jvj2wV0vOo0",
            isPremium: false
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
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/qEwKCR5JCog",
            isPremium: false
        },
        {
            name: "Élévations latérales",
            description: "Isolation des deltoïdes moyens",
            sets: "3-4 séries",
            reps: "12-15 répétitions",
            rest: "1-2 minutes",
            tips: "Bras légèrement fléchis, montée jusqu'à l'horizontale",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/3VcKaXpzqRo",
            isPremium: true
        },
        {
            name: "Élévations frontales",
            description: "Cible les deltoïdes antérieurs",
            sets: "3 séries",
            reps: "12-15 répétitions",
            rest: "1-2 minutes",
            tips: "Alternez les bras, montée jusqu'à l'horizontale",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/qEwKCR5JCog",
            isPremium: true
        },
        {
            name: "Oiseau",
            description: "Travaille les deltoïdes postérieurs",
            sets: "3-4 séries",
            reps: "12-15 répétitions",
            rest: "1-2 minutes",
            tips: "Penché en avant, serrez les omoplates",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/T1U3_Gjzfqg",
            isPremium: true
        },
        {
            name: "Shrugs",
            description: "Développement des trapèzes",
            sets: "3 séries",
            reps: "12-15 répétitions",
            rest: "1-2 minutes",
            tips: "Haussement d'épaules vertical, contraction en haut",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/cJRVVxmytaM",
            isPremium: false
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
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/Xyd_fa5zoEU",
            isPremium: false
        },
        {
            name: "Planche",
            description: "Gainage statique du core",
            sets: "3-4 séries",
            reps: "30-60 secondes",
            rest: "1 minute",
            tips: "Corps aligné, contractez les abdos et fessiers",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/pSHjTRCQxIw",
            isPremium: true
        },
        {
            name: "Relevé de jambes",
            description: "Cible le bas des abdominaux",
            sets: "3 séries",
            reps: "12-20 répétitions",
            rest: "1 minute",
            tips: "Jambes tendues, montée contrôlée",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/JB2oyawG9KI",
            isPremium: true
        },
        {
            name: "Russian Twist",
            description: "Travaille les obliques",
            sets: "3 séries",
            reps: "20-30 répétitions",
            rest: "1 minute",
            tips: "Pieds décollés, rotation du tronc",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/wkD8rjkodUI",
            isPremium: true
        },
        {
            name: "Mountain Climbers",
            description: "Cardio et renforcement du core",
            sets: "3 séries",
            reps: "20-30 répétitions",
            rest: "1 minute",
            tips: "Position planche, alternez les genoux vers la poitrine",
            hasVideo: true,
            videoUrl: "https://www.youtube.com/embed/nmwgirgXLYM",
            isPremium: false
        }
    ]
};

// Variables globales pour le minuteur
let timerInterval;
let timeLeft = 0;
let isTimerRunning = false;
let selectedTime = 0;

// Variables globales pour l'authentification
let currentUser = null;
let isAuthMode = 'login'; // 'login' ou 'register'

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupMuscleGroups();
    setupTimer();
    setupCalculators();
    setupAuthentication();
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
            const href = link.getAttribute('href');
            
            // Gérer les liens d'authentification
            if (link.id === 'login-link') {
                e.preventDefault();
                showAuthModal('login');
                navMenu.classList.remove('active');
                return;
            }
            
            if (link.id === 'register-link') {
                e.preventDefault();
                showAuthModal('register');
                navMenu.classList.remove('active');
                return;
            }
            
            if (link.id === 'logout-link') {
                e.preventDefault();
                logout();
                navMenu.classList.remove('active');
                return;
            }
            
            // Navigation normale pour les autres liens
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                scrollToSection(targetId);
                navMenu.classList.remove('active');
            }
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
    
    // Vérifier si l'utilisateur est premium
    const isUserPremium = currentUser && currentUser.isPremium;
    const canAccessVideo = !exercise.isPremium || isUserPremium;
    
    let videoHTML = '';
    if (exercise.hasVideo) {
        if (canAccessVideo) {
            // Vidéo accessible
            videoHTML = `
                <div class="video-container">
                    <h5><i class="fas fa-play-circle"></i> Vidéo explicative</h5>
                    <div class="video-wrapper">
                        <iframe src="${exercise.videoUrl}" 
                                title="Vidéo explicative - ${exercise.name}"
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </div>
                </div>
            `;
        } else {
            // Vidéo bloquée pour les utilisateurs gratuits
            videoHTML = `
                <div class="premium-locked">
                    <h5><i class="fas fa-crown"></i> Vidéo Premium</h5>
                    <div class="premium-upgrade-message">
                        <p><i class="fas fa-lock"></i> Cette vidéo explicative est réservée aux membres Premium</p>
                        <p>Débloquez l'accès à toutes les vidéos HD avec des conseils détaillés</p>
                        <button class="upgrade-btn" onclick="subscribeToPlan('monthly')">
                            <i class="fas fa-crown"></i> Passer au Premium
                        </button>
                    </div>
                </div>
            `;
        }
    }
    
    div.innerHTML = `
        <h4>${exercise.name}</h4>
        <p><strong>Description:</strong> ${exercise.description}</p>
        <p><strong>Séries:</strong> ${exercise.sets}</p>
        <p><strong>Répétitions:</strong> ${exercise.reps}</p>
        <p><strong>Repos:</strong> ${exercise.rest}</p>
        <p><strong>Conseils:</strong> ${exercise.tips}</p>
        ${videoHTML}
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
    if (setCustomButton) {
        setCustomButton.addEventListener('click', () => {
            const minutes = parseInt(customMinutes.value) || 0;
            const seconds = parseInt(customSeconds.value) || 0;
            const totalSeconds = minutes * 60 + seconds;
            
            if (totalSeconds > 0) {
                setTimer(totalSeconds);
                presetButtons.forEach(b => b.classList.remove('active'));
            }
        });
    }

    // Contrôles du minuteur
    if (startButton) startButton.addEventListener('click', startTimer);
    if (pauseButton) pauseButton.addEventListener('click', pauseTimer);
    if (resetButton) resetButton.addEventListener('click', resetTimer);
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
    const timerDisplay = document.getElementById('timer-display');
    if (timerDisplay) {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timerDisplay.textContent = display;
    }
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
    try {
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
    } catch (error) {
        console.log('Audio non supporté:', error);
    }
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
    
    if (!resultDiv) return;
    
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
    
    if (!resultDiv) return;
    
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

// Fonctions utilitaires
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// === GESTION DE L'AUTHENTIFICATION ===

function setupAuthentication() {
    // Vérifier si l'utilisateur est déjà connecté
    const savedUser = localStorage.getItem('fittracker_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIForLoggedInUser();
    }
    
    // Configuration des formulaires
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    // Configuration des boutons OAuth
    setupGoogleAuth();
    setupAppleAuth();
}

function showAuthModal(mode = 'login') {
    const modal = document.getElementById('auth-modal');
    const modalTitle = document.getElementById('modal-title');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const authSwitchText = document.getElementById('auth-switch-text');
    const authSwitchBtn = document.getElementById('auth-switch-btn');
    
    if (!modal) return;
    
    isAuthMode = mode;
    
    if (mode === 'login') {
        modalTitle.textContent = 'Connexion';
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        authSwitchText.textContent = 'Pas encore de compte ?';
        authSwitchBtn.textContent = 'S\'inscrire';
    } else {
        modalTitle.textContent = 'Inscription';
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        authSwitchText.textContent = 'Déjà un compte ?';
        authSwitchBtn.textContent = 'Se connecter';
    }
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function toggleAuthMode() {
    const newMode = isAuthMode === 'login' ? 'register' : 'login';
    showAuthModal(newMode);
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        alert('Veuillez remplir tous les champs');
        return;
    }
    
    // Simulation de connexion (remplacer par vraie authentification)
    const user = {
        id: Date.now(),
        email: email,
        name: email.split('@')[0],
        isPremium: false,
        joinDate: new Date().toISOString()
    };
    
    currentUser = user;
    localStorage.setItem('fittracker_user', JSON.stringify(user));
    
    updateUIForLoggedInUser();
    closeAuthModal();
    
    // Message de bienvenue
    setTimeout(() => {
        alert(`Bienvenue ${user.name} ! Vous êtes maintenant connecté.`);
    }, 500);
}

function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm').value;
    
    if (!name || !email || !password || !confirmPassword) {
        alert('Veuillez remplir tous les champs');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
    }
    
    if (password.length < 6) {
        alert('Le mot de passe doit contenir au moins 6 caractères');
        return;
    }
    
    // Simulation d'inscription (remplacer par vraie authentification)
    const user = {
        id: Date.now(),
        email: email,
        name: name,
        isPremium: false,
        joinDate: new Date().toISOString()
    };
    
    currentUser = user;
    localStorage.setItem('fittracker_user', JSON.stringify(user));
    
    updateUIForLoggedInUser();
    closeAuthModal();
    
    // Message de bienvenue
    setTimeout(() => {
        alert(`Bienvenue ${user.name} ! Votre compte a été créé avec succès.`);
    }, 500);
}

function logout() {
    currentUser = null;
    localStorage.removeItem('fittracker_user');
    updateUIForLoggedOutUser();
    
    // Rediriger vers l'accueil
    scrollToSection('accueil');
    
    alert('Vous avez été déconnecté avec succès.');
}

function updateUIForLoggedInUser() {
    // Mettre à jour la navigation
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const logoutLink = document.getElementById('logout-link');
    
    if (loginLink) loginLink.classList.add('hidden');
    if (registerLink) registerLink.classList.add('hidden');
    if (logoutLink) logoutLink.classList.remove('hidden');
    
    // Mettre à jour le planning
    const planningContent = document.getElementById('planning-content');
    const userPlanning = document.getElementById('user-planning');
    const usernameDisplay = document.getElementById('username-display');
    
    if (planningContent) planningContent.classList.add('hidden');
    if (userPlanning) userPlanning.classList.remove('hidden');
    if (usernameDisplay && currentUser) usernameDisplay.textContent = currentUser.name;
}

function updateUIForLoggedOutUser() {
    // Mettre à jour la navigation
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const logoutLink = document.getElementById('logout-link');
    
    if (loginLink) loginLink.classList.remove('hidden');
    if (registerLink) registerLink.classList.remove('hidden');
    if (logoutLink) logoutLink.classList.add('hidden');
    
    // Mettre à jour le planning
    const planningContent = document.getElementById('planning-content');
    const userPlanning = document.getElementById('user-planning');
    
    if (planningContent) planningContent.classList.remove('hidden');
    if (userPlanning) userPlanning.classList.add('hidden');
}

// === AUTHENTIFICATION OAUTH ===

function setupGoogleAuth() {
    const googleBtn = document.getElementById('google-signin-btn');
    if (googleBtn) {
        googleBtn.addEventListener('click', handleGoogleSignIn);
    }
}

function setupAppleAuth() {
    const appleBtn = document.getElementById('apple-signin-btn');
    if (appleBtn) {
        appleBtn.addEventListener('click', handleAppleSignIn);
    }
}

function handleGoogleSignIn() {
    // Simulation de connexion Google (remplacer par vraie intégration)
    alert('Connexion Google en cours de développement...');
}

function handleAppleSignIn() {
    // Simulation de connexion Apple (remplacer par vraie intégration)
    alert('Connexion Apple en cours de développement...');
}

// === GESTION DU PLANNING ===

function createWorkout() {
    const modal = document.getElementById('workout-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeWorkoutModal() {
    const modal = document.getElementById('workout-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function showWorkoutHistory() {
    alert('Historique des entraînements en cours de développement...');
}

function showExerciseSelector() {
    const modal = document.getElementById('exercise-selector-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeExerciseSelectorModal() {
    const modal = document.getElementById('exercise-selector-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function confirmExerciseSelection() {
    alert('Sélection d\'exercices en cours de développement...');
    closeExerciseSelectorModal();
}

// === GESTION DES ABONNEMENTS ===

function subscribeToPlan(planType) {
    if (!currentUser) {
        showAuthModal('login');
        return;
    }
    
    const modal = document.getElementById('payment-modal');
    const planName = document.getElementById('selected-plan-name');
    const planPrice = document.getElementById('selected-plan-price');
    const planPeriod = document.getElementById('selected-plan-period');
    
    if (modal) {
        if (planType === 'monthly') {
            planName.textContent = 'Plan Premium Mensuel';
            planPrice.textContent = '9,99€';
            planPeriod.textContent = '/mois';
        } else if (planType === 'yearly') {
            planName.textContent = 'Plan Premium Annuel';
            planPrice.textContent = '99,99€';
            planPeriod.textContent = '/an';
        }
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closePaymentModal() {
    const modal = document.getElementById('payment-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Gestion des erreurs
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
});

// === GESTION DE STRIPE ===

let stripe;
let elements;
let cardElement;

// Clé API Stripe de production
const STRIPE_PUBLISHABLE_KEY = 'pk_live_51IktQRJrCx6Ol33xzuFjnB47tR7R5CuObx3KiEbtqXj4qn216ozrqRUVfZdff9nUKGzG0PndoGLUf5YeJaqroRVT00povTjuyY';

function initializeStripe() {
    try {
        // Initialiser Stripe avec la clé de production
        stripe = Stripe(STRIPE_PUBLISHABLE_KEY);
        elements = stripe.elements();
        
        // Créer l'élément de carte
        setupCardElement();
        
        // Gérer la soumission du formulaire de paiement
        const paymentForm = document.getElementById('payment-form');
        if (paymentForm) {
            paymentForm.addEventListener('submit', handlePaymentSubmit);
        }
        
        console.log('Stripe initialisé avec succès en mode production');
    } catch (error) {
        console.error('Erreur lors de l\'initialisation de Stripe:', error);
        // Fallback vers le mode simulation en cas d'erreur
        setupMockCardElement();
    }
}

function setupCardElement() {
    const cardElementContainer = document.getElementById('card-element');
    if (!cardElementContainer || !elements) return;
    
    // Style pour l'élément de carte
    const style = {
        base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#9e2146',
        },
    };
    
    // Créer l'élément de carte
    cardElement = elements.create('card', { style: style });
    cardElement.mount('#card-element');
    
    // Gérer les erreurs en temps réel
    cardElement.on('change', ({ error }) => {
        const displayError = document.getElementById('card-errors');
        if (error) {
            displayError.textContent = error.message;
        } else {
            displayError.textContent = '';
        }
    });
}

function setupMockCardElement() {
    const cardElementContainer = document.getElementById('card-element');
    if (cardElementContainer) {
        // Créer un faux champ de carte pour la démo (fallback)
        cardElementContainer.innerHTML = `
            <div style="padding: 15px; border: 1px solid #ccc; border-radius: 4px; background: white;">
                <input type="text" placeholder="1234 1234 1234 1234" style="border: none; outline: none; width: 100%; font-size: 16px; color: #424770;" readonly>
                <div style="display: flex; gap: 10px; margin-top: 10px;">
                    <input type="text" placeholder="MM/YY" style="border: none; outline: none; width: 60px; font-size: 14px; color: #424770;" readonly>
                    <input type="text" placeholder="CVC" style="border: none; outline: none; width: 50px; font-size: 14px; color: #424770;" readonly>
                </div>
                <div style="margin-top: 10px; font-size: 12px; color: #ff6b6b;">
                    <i class="fas fa-exclamation-triangle"></i> Erreur de configuration Stripe - Mode démo activé
                </div>
            </div>
        `;
    }
}

async function handlePaymentSubmit(event) {
    event.preventDefault();
    
    if (!stripe || !cardElement) {
        console.error('Stripe non initialisé');
        return;
    }
    
    const submitButton = document.getElementById('submit-payment');
    const loadingDiv = document.getElementById('payment-loading');
    const formDiv = document.querySelector('.payment-form');
    const errorDiv = document.getElementById('card-errors');
    
    // Désactiver le bouton et afficher le loading
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Traitement...';
    
    // Afficher le loading
    if (formDiv) formDiv.classList.add('hidden');
    if (loadingDiv) loadingDiv.classList.remove('hidden');
    
    try {
        // Créer le token de paiement
        const { token, error } = await stripe.createToken(cardElement);
        
        if (error) {
            // Afficher l'erreur
            console.error('Erreur Stripe:', error);
            if (errorDiv) errorDiv.textContent = error.message;
            
            // Réactiver le formulaire
            if (formDiv) formDiv.classList.remove('hidden');
            if (loadingDiv) loadingDiv.classList.add('hidden');
            submitButton.disabled = false;
            submitButton.innerHTML = '<i class="fas fa-credit-card"></i> Confirmer le paiement';
        } else {
            // Traiter le paiement avec le token
            await processPayment(token);
        }
    } catch (error) {
        console.error('Erreur lors du traitement du paiement:', error);
        if (errorDiv) errorDiv.textContent = 'Une erreur est survenue lors du traitement du paiement.';
        
        // Réactiver le formulaire
        if (formDiv) formDiv.classList.remove('hidden');
        if (loadingDiv) loadingDiv.classList.add('hidden');
        submitButton.disabled = false;
        submitButton.innerHTML = '<i class="fas fa-credit-card"></i> Confirmer le paiement';
    }
}

async function processPayment(token) {
    try {
        // Ici, vous devriez normalement envoyer le token à votre serveur
        // Pour GitHub Pages, nous simulons le succès après validation du token
        
        console.log('Token de paiement reçu:', token.id);
        
        // Simuler un délai de traitement serveur
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Simuler le succès du paiement
        handleSuccessfulPayment(token);
        
    } catch (error) {
        console.error('Erreur lors du traitement du paiement:', error);
        throw error;
    }
}

function handleSuccessfulPayment(token) {
    // Simuler le succès du paiement
    console.log('Token de paiement:', token);
    
    // Mettre à jour le statut de l'utilisateur
    if (currentUser) {
        currentUser.isPremium = true;
        localStorage.setItem('fittracker_user', JSON.stringify(currentUser));
    }
    
    // Fermer le modal de paiement
    closePaymentModal();
    
    // Afficher un message de succès
    setTimeout(() => {
        alert('🎉 Félicitations ! Votre abonnement Premium a été activé avec succès !');
        
        // Recharger la page pour mettre à jour l'interface
        window.location.reload();
    }, 500);
}

function disablePaymentFeatures() {
    // Désactiver les boutons de paiement si Stripe n'est pas configuré
    const paymentButtons = document.querySelectorAll('.premium-btn');
    paymentButtons.forEach(btn => {
        btn.disabled = true;
        btn.textContent = 'Configuration requise';
        btn.style.opacity = '0.5';
        btn.style.cursor = 'not-allowed';
    });
    
    // Afficher un message dans le champ de carte
    const cardElement = document.getElementById('card-element');
    if (cardElement) {
        cardElement.innerHTML = '<p style="color: #666; padding: 15px; text-align: center;">Configuration Stripe requise pour les paiements</p>';
    }
    
    console.warn('Les fonctionnalités de paiement sont désactivées. Veuillez configurer Stripe avec une clé API valide.');
}

function updatePaymentTotal(planType) {
    const subtotalElement = document.getElementById('payment-subtotal');
    const taxElement = document.getElementById('payment-tax');
    const totalElement = document.getElementById('payment-total-amount');
    
    let subtotal, tax, total;
    
    if (planType === 'monthly') {
        subtotal = 9.99;
        tax = subtotal * 0.20; // TVA 20%
        total = subtotal + tax;
    } else if (planType === 'yearly') {
        subtotal = 99.99;
        tax = subtotal * 0.20; // TVA 20%
        total = subtotal + tax;
    }
    
    if (subtotalElement) subtotalElement.textContent = `${subtotal.toFixed(2)}€`;
    if (taxElement) taxElement.textContent = `${tax.toFixed(2)}€`;
    if (totalElement) totalElement.textContent = `${total.toFixed(2)}€`;
}

// Initialiser Stripe quand la page est chargée
document.addEventListener('DOMContentLoaded', function() {
    // Attendre un peu pour que Stripe soit chargé
    setTimeout(() => {
        initializeStripe();
    }, 1000);
});

// Service Worker pour le cache (optionnel)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker enregistré avec succès');
            })
            .catch(function(error) {
                console.log('Échec de l\'enregistrement du ServiceWorker');
            });
    });
}
