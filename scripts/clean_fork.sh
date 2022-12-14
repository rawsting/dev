#!/bin/sh
set -e
# clean up the fork and restart from upstream
git remote add upstream https://github.com/forem/forem.git
git fetch upstream
git checkout main
git reset --hard upstream/main
git push origin main --force
