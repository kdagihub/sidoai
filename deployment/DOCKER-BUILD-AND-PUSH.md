# Images Docker → Hub

## Une commande (build + push **backend** + **web**)

À lancer depuis la racine **`sidoai/`** :

```bash
docker buildx bake --push
```

Registre ou tag :

```bash
REGISTRY=ciacems/sido TAG=1.0.0 docker buildx bake --push
```

Builder distant (ex.) :

```bash
docker buildx bake --builder cloud-ciacems-ciacems-builder --push
```

### Model server (pas dans le bake par défaut)

L’image **model** (Torch/CUDA) est **très lourde** et fait souvent échouer les builders cloud (**no space left**).  
**Recommandation** : au déploiement, utiliser l’image officielle **`onyxdotapp/onyx-model-server`** avec le même **`IMAGE_TAG`** que tu utilises pour le reste (ex. `latest`).

Dans Dokploy / `.env` : **ne pas** définir `ONYX_MODEL_SERVER_IMAGE` pointant vers `ciacems/sido` si tu n’as pas poussé ce tag — laisse le défaut du compose.

Build manuel du model (machine ou builder avec **assez d’espace disque**) :

```bash
docker buildx bake model --push
```

## Code interpreter (pas dans ce repo)

Optionnel — recopier l’image officielle sous ton dépôt :

```bash
docker pull onyxdotapp/code-interpreter:latest && docker tag onyxdotapp/code-interpreter:latest ciacems/sido:code-interpreter-latest && docker push ciacems/sido:code-interpreter-latest
```

Ou laisser le défaut `onyxdotapp/code-interpreter` (sans `CODE_INTERPRETER_IMAGE`).

## Lite ou pas ?

**Non** : le bake ne lance aucun conteneur. Le mode **Lite** se choisit au **run** (`docker-compose.onyx-lite.yml`).

## Dokploy

**Compose Path** : **`deployment/docker_compose/docker-compose.dokploy-deploy.yml`** (fichier fusionné **sans** `include`).

Ne pas utiliser `docker-compose.dokploy-entry.yml` dans Dokploy : le validateur des domaines ne résout pas `include`, d’où *« service nginx does not exist »*. Le fichier `dokploy-deploy.yml` expose bien tous les services (dont `nginx`).

Pour la ligne de commande locale avec `include`, garder `docker-compose.dokploy-entry.yml`.

Si **Traefik** écoute déjà sur le port **80**, nginx **ne doit pas** mapper `80:80` sur l’hôte — c’est le cas avec la config actuelle (`prod-no-letsencrypt` sans ports nginx ; overlay Dokploy). Routage : domaine → réseau Docker → service `nginx` port **80** interne.

VPS **sans** Traefik sur :80 : ajouter `-f docker-compose.prod-no-letsencrypt.publish-80.yml`.

Variables : `deployment/docker_compose/env.template`.

### Secret

```bash
openssl rand -hex 32
```
