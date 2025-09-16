```mermaid
sequenceDiagram
    participant Browser
    participant Server

    Browser->>Server: GET spa
    Server-->>Browser: spa HTML Document
    Browser->>Server: GET main.css
    Server-->>Browser: main.css file
    Browser->>Server: GET spa.js
    Server-->>Browser: spa.js JavaScript file
    Browser->>Server: GET data.json
    Server-->>Browser: Send list of notes