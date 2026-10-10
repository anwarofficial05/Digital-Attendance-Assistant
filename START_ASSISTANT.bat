@echo off
title Synexia Digital Attendance Assistant
echo ========================================================
echo    SYNEXIA - PROBLEM STATEMENT 10: ATTENDANCE ASSISTANT
echo ========================================================
echo Starting Assistant...
cd /d "%~dp0"

REM Launch python server if python is installed, or launch browser directly
python --version >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Python detected. Launching local server...
    python server.py
) else (
    echo Python not found. Opening index.html directly in browser...
    start "" "index.html"
)
pause
