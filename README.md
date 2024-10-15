Building Docker Image

```sh
docker build -t dipeshpatil.github.io --build-arg REACT_APP_GITHUB_TOKEN="<GITHUB_TOKEN>" .
```

Running Docker Container

```sh
docker run -d -p 3000:3000 --name dipeshpatil.github.io dipeshpatil.github.io
```
