#!/usr/bin/env bash
set -euo pipefail
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" || exit ; pwd -P )
cd "$parent_path" || exit
if [ 1 -eq "$#" ]
then
  make build-production TAG="$1"
else
  make build-production
fi

cd "$parent_path/ansible" || exit
ansible-playbook playbook.yml
