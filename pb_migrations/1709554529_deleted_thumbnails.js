/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("b87ugxup54m8hs4");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "b87ugxup54m8hs4",
    "created": "2024-03-04 09:00:45.516Z",
    "updated": "2024-03-04 09:11:02.500Z",
    "name": "thumbnails",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3cj0cgnt",
        "name": "image",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
