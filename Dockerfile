FROM stoplight/prism:5

# get the latest OAS file from nishiki-document repo
RUN wget https://raw.githubusercontent.com/genesis-tech-tribe/nishiki-documents/c1ea7d5a2fd12e1271551fc672b7141f5777ffdf/web-api/nishiki-web-api.yaml \
&& mv nishiki-web-api.yaml /tmp/api.yml
