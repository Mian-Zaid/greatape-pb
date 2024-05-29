/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yv1btrvt3f5v8bb",
    "created": "2024-04-17 08:08:42.263Z",
    "updated": "2024-04-17 08:08:42.263Z",
    "name": "Images",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tw9xhk0d",
        "name": "image",
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
  const collection = dao.findCollectionByNameOrId("yv1btrvt3f5v8bb");

  return dao.deleteCollection(collection);
})
