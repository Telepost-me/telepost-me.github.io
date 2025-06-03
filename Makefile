.PHONY: site-start
site-start:
	@echo
	@echo "-> Launch site in start mode..."
	@DOCKER_COMPOSE_DOCUSAURUS_RUN_MODE="start" docker compose up docusaurus-run

.PHONY: site-serve
site-serve:
	@echo
	@echo "-> Launch site in serve mode..."
	@DOCKER_COMPOSE_DOCUSAURUS_RUN_MODE="serve" docker compose up docusaurus-run

.PHONY: yaml-lint
yaml-lint:
	@echo
	@echo "-> Lint YAML files..."
	@docker compose up yaml-lint

.PHONY: markdown-lint
markdown-lint:
	@echo
	@echo "-> Lint Markdown files..."
	@docker compose up markdown-lint

.PHONY: lint
lint: yaml-lint markdown-lint

.PHONY: clear
clear:
	@echo
	@echo "-> Docker Compose down + remove images & volumes..."
	@docker compose down --remove-orphans && docker compose rm --volumes --force
	@echo
	@echo "-> Remove dirs: .docusaurus + build + node_modules"
	@rm -rf ./.docusaurus ./build ./node_modules

.PHONY: all
all: lint site-start
