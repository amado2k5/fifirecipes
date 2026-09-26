#!/bin/zsh
# Runs the whole channel import locally, unattended, one step after another.
# Every step is resumable, so this script can simply be started again.
#   scripts/recipe-videos/channel/run_all.sh transcripts/channel-fatma-abu-haty
set -e
DATA=${1:?data folder}
HERE=${0:A:h}
export LOCAL_LLM=${LOCAL_LLM:-mlx-community/Qwen2.5-72B-Instruct-4bit}
log() { print -r -- "$(date '+%F %T') $*" | tee -a "$DATA/pipeline.log"; }

log "step 1: metadata"
python "$HERE/../channel_metadata.py" "$DATA/channel_videos.tsv" "$DATA/metadata.jsonl" >> "$DATA/fetch.log" 2>&1
log "step 2: classify"
python "$HERE/classify.py" "$DATA" --refresh-metadata --only-with-metadata >> "$DATA/pipeline.log" 2>&1
log "step 3: match"
python "$HERE/match.py" "$DATA" >> "$DATA/pipeline.log" 2>&1
log "step 4a: download, transcribe, OCR"
python "$HERE/media.py" "$DATA" >> "$DATA/pipeline.log" 2>&1
log "step 4b: draft recipes"
python "$HERE/draft.py" "$DATA" >> "$DATA/pipeline.log" 2>&1
log "step 5: match dishes named from their videos"
python "$HERE/rematch_unclear.py" "$DATA" >> "$DATA/pipeline.log" 2>&1
log "done"
