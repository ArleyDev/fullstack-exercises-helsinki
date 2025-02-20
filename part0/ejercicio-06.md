```mermaid
sequenceDiagram
    participant browser
    participant server


    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: xhr (respuesta con datos)
    deactivate server
    browser->>browser: Actualiza la interfaz con los datos recibidos
```