/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "mrqfcsmd5x0tdja",
    "created": "2024-03-29 12:48:23.917Z",
    "updated": "2024-03-29 12:48:23.917Z",
    "name": "Images",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qc0avtdg",
        "name": "field",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mrqfcsmd5x0tdja");

  return dao.deleteCollection(collection);
})
