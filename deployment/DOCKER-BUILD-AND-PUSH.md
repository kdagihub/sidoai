# Images Docker → Hub

## Une commande (build + push des 3 images)

À lancer depuis la racine **`sidoai/`** (ce dossier doit contenir `docker-bake.hcl`) :

```bash
docker buildx bake --push
```

Registre ou tag :

```bash
REGISTRY=ciacems/sido TAG=1.0.0 docker buildx bake --push
```

Builder distant (ex.) :

```bash
docker buildx bake --builder ton-builder-cloud --push
```

## Code interpreter (pas dans ce repo)

Optionnel — recopier l’image officielle sous ton dépôt :

```bash
docker pull onyxdotapp/code-interpreter:latest && docker tag onyxdotapp/code-interpreter:latest ciacems/sido:code-interpreter-latest && docker push ciacems/sido:code-interpreter-latest
```

## Lite ou pas ?

**Non : ces commandes ne lancent rien du tout** (pas de conteneur). Elles ne font que **construire et pousser** des images.

Le mode **Onyx Lite**, c’est au **démarrage** de la stack : fichier  
`docker-compose.yml` **+** `docker-compose.onyx-lite.yml` (profils, `DISABLE_VECTOR_DB`, etc.).  
**Les mêmes images** servent pour Lite ou stack complète.

## Dokploy

**Un service « Compose »** avec par ex.  
`docker-compose.prod-no-letsencrypt.yml` + `docker-compose.dokploy.yml`  
(+ overlay `docker-compose.onyx-lite.yml` seulement si tu veux Lite au run).

Variables images : voir `deployment/docker_compose/env.template`.
