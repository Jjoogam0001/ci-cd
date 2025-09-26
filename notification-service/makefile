# -------------------------
# Variables
# -------------------------
IMAGE_NAME=martin2020i/notification-service
TAG=v6.0.1
DOCKERFILE=Dockerfile
BUILD_CONTEXT=.

# -------------------------
# Default target
# -------------------------
all: build

# -------------------------
# Build with buildx
# -------------------------
build:
	docker buildx build \
		--platform linux/amd64,linux/arm64 \
		-t $(IMAGE_NAME):$(TAG) \
		-f $(DOCKERFILE) \
		$(BUILD_CONTEXT) \
		--load

# -------------------------
# Push multi-arch image
# -------------------------
push:
	docker buildx build \
		--platform linux/amd64,linux/arm64 \
		-t $(IMAGE_NAME):$(TAG) \
		-f $(DOCKERFILE) \
		$(BUILD_CONTEXT) \
		--push

# -------------------------
# Clean local images
# -------------------------
clean:
	docker rmi $(IMAGE_NAME):$(TAG) || true

# -------------------------
# Help
# -------------------------
help:
	@echo "Makefile commands:"
	@echo "  make build   - Build local image for amd64 + arm64"
	@echo "  make push    - Build & push image to Docker Hub"
	@echo "  make clean   - Remove local image"
