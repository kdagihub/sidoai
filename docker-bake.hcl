# Usage (depuis la racine sidoai/) :
#   docker buildx bake --push
# Avec registre / tag personnalisés :
#   REGISTRY=ciacems/sido TAG=1.0.0 docker buildx bake --push

variable "REGISTRY" {
  default = "ciacems/sido"
}

variable "TAG" {
  default = "latest"
}

group "default" {
  targets = ["backend", "web", "model"]
}

target "backend" {
  context    = "backend"
  dockerfile = "Dockerfile"
  tags       = ["${REGISTRY}:backend-${TAG}"]
}

target "web" {
  context    = "web"
  dockerfile = "Dockerfile"
  tags       = ["${REGISTRY}:web-${TAG}"]
}

target "model" {
  context    = "backend"
  dockerfile = "Dockerfile.model_server"
  tags       = ["${REGISTRY}:model-${TAG}"]
}
