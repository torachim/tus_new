const express = require('express');
const sqlite3 = require('sqlite3').verbose();



const app = express();
//Port
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true }));

//SQLite Datenbank einrichten
const db = new sqlite3.Database('./articles.db', (err) => {
    if (err){
        console.error('Fehler beim Oeffnen der Datenbak', err);
    } else {
        console.log('Erfolgreiches verbinden mit der Datenbank');
        createTable();
    }
});

//Tabelle erstellen für Artikel
createTable = () => {
    db.serialize(() => {
            db.run(`
                CREATE TABLE IF NOT EXISTS article (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                summary TEXT,
                content TEXT,
                author TEXT,
                date TEXT
                )
            `, (err) => {
                if (err) {
                    console.error('Fehler beim erstellen der Datenbank', err);
                } else {
                    console.log('Datenbank erfolgreich erstellt oder sie existiert bereits');
                }
            });
    });
}

// API Endpunkt: Alle Artikel abrufen
app.get('/api/articles', (req, res) => {
    db.all('SELECT * FROM articles', [], (err, rows) => {
        if (err){
            console.error('Fehler beim Abrufen der Artikel:', err.message);
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});


//Artikel in die Datenbank laden
const fs = require('fs');
const path = require('path');
const exp = require('constants');
const { create } = require('domain');

//Pfad zum Artikelordner
const articlesFolder = path.join(__dirname, 'artikel');

//Dateien laden
const loadArticlesFromFiles = () => {
    fs.readdir(articlesFolder, (err, files) => {
        if (err){
            console.error('Fehler beim Laden des Ordners', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(articlesFolder, file);
            if (path.extname(file) == '.json') {
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err){
                        console.error('Fehler beim Lesen der Datei:', err);
                        return;
                    }

                    try{                   
                        const articleData = JSON.parse(data);
                        const { title, summary, content, author, date } = articleData;
    
                        //Artikel in die Datenbank einfuegen
                        db.run('INSERT INTO article (title, summary, content, author, date) VALUES (?, ?, ?, ?, ?)', [title, summary, content, author, date], (err) => {
                            if (err) {
                                console.error('Fehler beim Einfuegen des Artikels in die Datenbank', err);
                                return;
                            }
                            console.log(`Artikel "${title}" erfolgreich hinzugefuegt`);
                        });
                    } catch (parseError) {
                        console.error('Fehler beim Laden der JSON-Dateien', parseError);
                    }
                });
            }
        });
    });
};

process.on('uncaughtException', (err) => {
    console.error('Es ist ein unbehandelter Fehler aufgetreten:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', promise, 'reason:', reason);
});


app.listen(PORT, () => {
    console.log(`Server gestartet auf Port ${PORT}`)
})



setInterval(loadArticlesFromFiles, 180000);