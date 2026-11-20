# PlushOpp DB

Laravel alapú REST API plüssök és plüsstípusok kezelésére. Az adatbázis MySQL.

## Adatbázis diagram

<!-- Ide tedd a képet: másold a fájlt a docs/ mappába adatbazis.png néven,
     vagy írd át lent az útvonalat a saját fájlodra. -->

![Adatbázis diagram](docs/adatbazis.png)

## Adatbázis szerkezet

**pluss**

| Oszlop | Típus |
|---|---|
| id | int |
| nev | string |
| szuletesidatum | date |
| pluss_tipus_id | int (idegen kulcs → pluss_tipus.id) |

**pluss_tipus**

| Oszlop | Típus |
|---|---|
| id | int |
| tipus | string |

## Telepítés

```bash
composer install
cp .env.example .env
php artisan key:generate
```

Állítsd be a `.env` fájlban az adatbázist:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=plushopp_db
DB_USERNAME=root
DB_PASSWORD=
```

Hozd létre az üres `plushopp_db` adatbázist, majd futtasd a migrációkat mintaadatokkal:

```bash
php artisan migrate:fresh --seed
php artisan serve
```

Az API ezen a címen érhető el: `http://127.0.0.1:8000/api`

## Végpontok

| Metódus | URL | Leírás |
|---|---|---|
| GET | `/api/pluss` | Az összes plüss, a típusával együtt |
| GET | `/api/pluss/{id}` | Egy plüss, a típusával együtt |
| POST | `/api/pluss` | Új plüss létrehozása |
| GET | `/api/pluss-tipus` | Az összes típus |
| GET | `/api/pluss-tipus/{id}` | Egy típus a hozzá tartozó plüssökkel |
| POST | `/api/pluss-tipus` | Új típus létrehozása |

### POST /api/pluss

Kérés törzse:

```json
{
  "nev": "Mézes Mackó",
  "szuletesidatum": "2023-11-02",
  "pluss_tipus_id": 1
}
```

Szabályok:

- `nev`: kötelező, szöveg, legfeljebb 255 karakter
- `szuletesidatum`: kötelező, érvényes dátum
- `pluss_tipus_id`: kötelező, létező típus azonosítója

Sikeres válasz (`201 Created`):

```json
{
  "id": 7,
  "nev": "Mézes Mackó",
  "szuletesidatum": "2023-11-02",
  "pluss_tipus_id": 1,
  "tipus": { "id": 1, "tipus": "Mackó" }
}
```

### POST /api/pluss-tipus

Kérés törzse:

```json
{
  "tipus": "Pingvin"
}
```

Szabályok:

- `tipus`: kötelező, szöveg, legfeljebb 255 karakter

Sikeres válasz (`201 Created`):

```json
{
  "id": 5,
  "tipus": "Pingvin"
}
```

### Hibák

| Kód | Mikor |
|---|---|
| 404 | Nincs ilyen azonosítójú rekord, vagy rossz az URL |
| 422 | Hibás vagy hiányzó adat a POST kérésben (a válasz tartalmazza, melyik mező hibás) |

## Gyors kipróbálás

```bash
curl http://127.0.0.1:8000/api/pluss

curl -X POST http://127.0.0.1:8000/api/pluss \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"nev":"Bodri","szuletesidatum":"2020-06-20","pluss_tipus_id":3}'
```
