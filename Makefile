.DEFAULT_GOAL := help

.SILENT: help

app@run:
	docker run --rm -it -p 8000:8000 --workdir /data -v c:\Users\DylanBALLANDRAS\Projects\minimap-extension	\:/data node:10 /bin/bash