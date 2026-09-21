@echo off
chcp 65001 > nul
echo ===================================================
echo   NOVOX STUDIO - DÉPLOIEMENT AUTOMATIQUE GITHUB
echo ===================================================
echo.

if not exist .git (
    echo [1/3] Initialisation du dépôt Git local...
    git init
    git branch -M main
) else (
    echo [1/3] Dépôt Git détecté.
)

echo [2/3] Ajout des fichiers modifiés et création du commit...
git add .
git commit -m "Mise à jour Novox Studio : Maquettes 30 FPS interactives, Refonte Offre & Sécurités"

echo [3/3] Synchronisation vers GitHub...
git push origin main

echo.
echo ===================================================
echo   DÉPLOIEMENT TERMINÉ AVEC SUCCÈS !
echo   Votre site est actualisé en ligne sur GitHub.
echo ===================================================
pause
