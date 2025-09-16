```mermaid
sequenceDiagram
    participant Browser
    participant Server
    participant Database

    Note left of Browser: User creates a new note in SPA
    Browser->>Server: 201 POST a /new_note_spa
    Server->>Database: Save note
    Database-->>Server: OK
    Server-->>Browser: JSON-data which includes the new note.
    Browser->>Browser: Update the page without reloading.