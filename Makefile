.PHONY: build-production
build-production: ## Build the production docker image.
	@docker buildx build \
		--platform linux/amd64,linux/arm64/v8 \
		--tag registry.tanshu.com/mozimo:latest \
		$(if $(TAG),--tag registry.tanshu.com/mozimo:$(TAG)) \
		--push \
		git@github.com:tanshu/mozimo.git
