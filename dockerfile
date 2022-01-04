FROM cypress/included:9.2.0

WORKDIR /opt/module

ENTRYPOINT [ "cypress", "run" ]

# ENTRYPOINT [ "bin", "sh" ]
