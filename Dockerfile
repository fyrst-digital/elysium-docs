FROM oven/bun:1.1

RUN apt-get update && apt-get install -y git

COPY . ./