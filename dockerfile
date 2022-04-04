FROM cypress/included:9.3.0

WORKDIR /opt/module

ENTRYPOINT [ "cypress", "run" ]

# ENTRYPOINT [ "bin", "sh" ]
