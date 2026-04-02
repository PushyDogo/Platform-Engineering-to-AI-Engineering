#!/bin/bash
# Quick local server for the roadmap tracker
# Runs on http://localhost:8080 by default
PORT=${1:-8080}
echo "Starting roadmap tracker at http://localhost:$PORT"
echo "Press Ctrl+C to stop."
cd "$(dirname "$0")"
python3 -m http.server "$PORT"
