# Usage (depuis la racine sidoai/) :
#   docker buildx bake --push
# → build + push uniquement backend + web (léger ; évite l’échec disque sur Torch/CUDA du model server).
#
# Le model server utilise l’image officielle onyxdotapp/onyx-model-server au déploiement
# (aligner IMAGE_TAG avec le reste). Pour builder model localement si tu as l’espace :
#   docker buildx bake model --push
#
# REGISTRY / TAG :
#   REGISTRY=ciacems/sido TAG=1.0.0 docker buildx bake --push

variable "REGISTRY" {
  default = "ciacems/sido"
}

variable "TAG" {
  default = "latest"
}

group "default" {
  targets = ["backend", "web"]
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

# Optionnel — très lourd (PyTorch + CUDA) ; souvent « No space left » sur builder cloud.
# Déploiement par défaut : image officielle ONYX_MODEL_SERVER_IMAGE / onyxdotapp/onyx-model-server.
target "model" {
  context    = "backend"
  dockerfile = "Dockerfile.model_server"
  tags       = ["${REGISTRY}:model-${TAG}"]
}
