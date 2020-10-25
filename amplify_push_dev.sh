#!/bin/bash
set -e
IFS='|'
CODEGEN="{\
\"generateCode\":true,\
\"codeLanguage\":\"javascript\",\
\"fileNamePattern\":\"graphql/**/*.graphql\",\
\"generatedFileName\":\"API\",\
\"generateDocs\":true,\
\"maxDepth\":10\
}"
amplify push \
--codegen $CODEGEN \
--yes