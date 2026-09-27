#!/usr/bin/env bash
# run_all.sh for Jaribal Wasfa YouTube channel
# This script runs the five pipeline steps on a separate data folder so it never touches the existing Fatma channel data.
# Usage: ./run_all.sh

set -euo pipefail

# Base directory of the repository (relative to this script)
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.. && pwd)"

# Define a unique data folder for the new channel
DATA_DIR="$BASE_DIR/transcripts/channel-jaribalwasfa"

# Create the data folder if it does not exist
mkdir -p "$DATA_DIR"

# Step 1 – metadata (fetch video list and basic info)
python3 "$BASE_DIR/scripts/recipe-videos/channel/channel_metadata.py" "$DATA_DIR"

# Step 2 – classify (run the LLM classifier)
python3 "$BASE_DIR/scripts/recipe-videos/channel/classify.py" "$DATA_DIR"

# Step 3 – match (determine which videos need a recipe draft)
python3 "$BASE_DIR/scripts/recipe-videos/channel/match.py" "$DATA_DIR"

# Step 4 – media (download video, extract audio, Whisper transcription, OCR)
python3 "$BASE_DIR/scripts/recipe-videos/channel/media.py" "$DATA_DIR"

# Step 5 – draft (generate recipe JSON using the local LLM)
python3 "$BASE_DIR/scripts/recipe-videos/channel/draft.py" "$DATA_DIR"

echo "All pipeline steps for Jaribal Wasfa completed. Results are in $DATA_DIR"
