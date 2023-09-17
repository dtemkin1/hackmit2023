## Show help message
help:
	@adt help-make

## Run the demo app (including the vite dev server)
run:
	honcho -f Procfile start

## Clean up the vite directory
clean:
	rm -rf vite/node_modules vite/dist

## Setup
setup:
	flask vite init
	flask vite install

## Install the vite dependencies
install:
	flask vite install