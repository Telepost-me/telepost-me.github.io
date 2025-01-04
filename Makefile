.PHONY: site lint down yaml-lint html-proofer all

.cleanup:
	@echo
	@echo "-> Cleanup: remove static site"
	@rm -rf _site

site: .cleanup
	@echo
	@echo "-> Launch site via Docker Compose..."
	@docker compose up jekyll-site

yaml-lint:
	@echo
	@echo "-> Lint YAML files via Docker Compose..."
	@docker compose up yaml-lint

html-proofer: .cleanup
	@echo
	@echo "-> Build & run HTMLProofer via Docker Compose..."
	@docker compose up html-proofer

lint: yaml-lint html-proofer

down:
	@echo
	@echo "-> Docker Compose — down..."
	@docker compose down

all: site lint
