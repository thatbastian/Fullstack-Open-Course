```mermaid
sequenceDiagram
    participant Browser
    participant Server
    participant Database

    Browser->>Server: 302 POST a /new_note
    Server->>Database: Save note
    Note right of Database: Database in this diagram is https://studies.cs.helsinki.fi/exampleapp/data.json
    Database-->>Server: OK
    Server-->>Browser: Redirect to /notes
    Browser->>Server: 200 GET /notes
    Server-->>Browser: HTML-page
    Browser->>Server: 200 GET /notes.json
    Server-->>Browser: JSON-data which includes the new note.