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

**Un seul** champ *Compose Path* :  
`deployment/docker_compose/docker-compose.dokploy-entry.yml`  
(ce fichier **inclut** déjà `prod-no-letsencrypt` + `dokploy` ; il faut Docker Compose **v2.24+** côté serveur).

Lite au run : ajoute l’overlay `docker-compose.onyx-lite.yml` seulement si tu l’intègres toi-même (Dokploy n’a souvent qu’un seul fichier — dans ce cas on peut fusionner ou documenter un second entry plus tard).

Variables images : voir `deployment/docker_compose/env.template`.
