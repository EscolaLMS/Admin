docker run --init --tty --rm \
           -v $(pwd):/p:delegated \
           -v composer_data:/tmp:delegated -w /p \
           -- composer require escolalms/api:latest