```mermaid
sequenceDiagram
    participant Browser
    participant Server
    participant Database

    Browser->>Server: POST /new_note
    Server->>Database: Save note
    Database-->>Server: OK
    Server-->>Browser: Redirect /notes
    Browser->>Server: GET /notes
    Server-->>Browser: HTML-page
    Browser->>Server: GET /notes.json
    Server-->>Browser: JSON-data which includes the new note.